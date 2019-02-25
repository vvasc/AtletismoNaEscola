#!/bin/bash

# Caso for ser reutilizado para outra repo
serverIP="191.252.200.33"
# Pasta destino da distro compactada, onde é esperado ter todas as pastas relevantes
scpDest="/var/www"
# Nome dado para o arquivo da distro compactada (pega da pasta dist/)
distFileName="dist.tar.gz"
# pasta onde está hosteado a distro no servidor
serverHTMLFolder="html/"

# Pressupoe-se que a arquitetura das pastas é a seguinte:
# $scpDest/ (nessa pasta será enviado a distro compactada e a manipulação feita)
#    | - backup/ (aqui contem arquivos importantes que serão COPIADOS para a pasta a ser hosteada)
#    | - $serverHTMLFolder/ (pasta que é usada para hostear a distro)


BUILD=true
SEND=true
TAR=true
# Trata das opções (--skipBuild, --skipSend)
option="$1"
case $option in
    -sb|--skipBuild)
    BUILD=false
    echo -e "\e[44mDEPLOY:\e[0m \e[93mskipBuild: Espera-se que a pasta \e[96mdist/ \e[93mfoi recentemente buildada!\e[0m"
    ;;
    -ss|--skipSend)
    SEND=false
    echo -e "\e[44mDEPLOY:\e[0m \e[93mskipSend: Espera-se que o arquivo \e[96m$distFileName \e[93mesteja na pasta \e[96m$scpDest \e[93mdo servidor!\e[0m"
    ;;
    -st|--skipTar)
    TAR=false
    echo -e "\e[44mDEPLOY:\e[0m \e[93mskipTar: Espera-se que o arquivo \e[96m$distFileName \e[93mesteja atualizado!\e[0m"
    ;;
esac

# Se não precisa zipar, nem builda (já ta compactado)
if [ "$TAR" = "false" ] ; then
    BUILD=false
fi
# Se nao precisa enviar, nem compacta, nem builda (arquivo compactado ja está no servidor)
if [ "$SEND" = "false" ] ; then
    BUILD=false
    TAR=false
fi

# Pega a branch ativa do git no momento
if ! currentBranch=$(git rev-parse --abbrev-ref HEAD)
    then
        # Caso esse comando do git falhe:
        echo -e "\e[44mDEPLOY:\e[0m \e[91mFALHOU EM PEGAR A BRANCH ATUAL!(Git) \e[0m"
        echo -e "\e[44mDEPLOY:\e[0m \e[91mQUER CONTINUAR? VOCE GARANTE QUE ESTÁ NA BRANCH: \e[96mPRODUCTION \e[91m??(Sim/Não) \e[0m"
        while true
        do
            read -n 1 -r
            if [[ $REPLY =~ ^[Nn]$ ]]
                then
                    exit
            elif [[ $REPLY =~ ^[Ss]$ ]]; then
                echo
                break
            fi
        done
else
    # Pegou a branch atual, vê se está em production
    if [ "$currentBranch" != "production" ]; then
        echo -e "\e[44mDEPLOY:\e[0m \e[91mVOCÊ NÃO ESTÁ NA BRANCH \e[96mPRODUCTION! \e[0m"
        exit
    fi
fi

#Builda o projeto
if $BUILD ; then
    echo -e "\e[44mDEPLOY:\e[0m BUILDING! Para pular execute: \e[96mnpm run deploy -- --skipBuild (ou -sb)"
    echo
    if ! ng build --prod; then
        # Caso o comando falhe ou der erro:
        echo -e "\e[44mDEPLOY:\e[0m \e[91mBUILD FALHOU! \e[0m"
        exit
    fi
fi

#Compacta a pasta dist/
if $TAR ; then
    echo -e "\e[44mDEPLOY:\e[0m COMPRIMINDO \e[96mdist/ \e[0mPARA \e[96m$distFileName\e[0m"
    echo -e "\e[44mDEPLOY:\e[0m Para pular a compressão e o build execute: \e[96mnpm run deploy -- --skipTar (ou -st)\e[0m"
    echo
    if ! tar czf $distFileName dist/
        then
            echo -e "\e[44mDEPLOY:\e[0m \e[91mCOMPRESSÃO FALHOU! \e[0m"
            exit
    fi
fi

#Envia o tar para o servidor
if $SEND ; then
    echo -e "\e[44mDEPLOY:\e[0m ENVIANDO \e[96m$distFileName \e[0mPARA SERVIDOR \e[96m$serverIP\e[0m"
    echo -e "\e[44mDEPLOY:\e[0m Para pular o build, a compressão e o envio do arquivo execute: \e[96mnpm run deploy -- --skipSend (ou -ss)\e[0m"
    echo
    if ! scp $distFileName root@$serverIP:$scpDest
        then
            echo -e "\e[44mDEPLOY:\e[0m \e[91mENVIO FALHOU! \e[0m"
            exit
    fi
fi

echo -e "\e[44mDEPLOY:\e[0m CONECTANDO À \e[96m$serverIP\e[0m"
echo
# Tudo que está dentro dos delimitadores "COMANDOSPARASERVIDOR" sera executado no bash do servidor
if ! ssh root@$serverIP /bin/bash << COMANDOSPARASERVIDOR
echo -e "\e[44mDEPLOY:\e[0m DESCOMPACTANDO \e[96m$distFileName!\e[0m"
echo
cd $scpDest
if ! tar xf $distFileName
    then
        echo -e "\e[44mDEPLOY:\e[0m \e[91mERRO AO DESCOMPACTAR \e[96m$distFileName! \e[0m"
        exit
fi

echo -e "\e[44mDEPLOY:\e[0m DELETANDO ARQUIVOS HOSTEADOS NA PASTA \e[96m$serverHTMLFolder\e[0m"
echo
rm -rf $serverHTMLFolder/*

echo -e "\e[44mDEPLOY:\e[0m MOVENDO ARQUIVOS DESCOMPACTADOS DE \e[96mdist/ \e[0mPARA \e[96m$serverHTMLFolder\e[0m"
echo
mv dist/* $serverHTMLFolder/

echo -e "\e[44mDEPLOY:\e[0m COPIANDO ARQUIVOS DE \e[96mbackup/ PARA \e[96m$serverHTMLFolder\e[0m"
echo
#Deixando sempre o index do nginx na pasta backup
cp backup/* $serverHTMLFolder/
rmdir dist

echo -e "\e[44mDEPLOY:\e[0m REINICIANDO NGINX"
echo
if ! service nginx restart; then
    echo -e "\e[44mDEPLOY:\e[0m \e[91mFALHA AO REINICIAR NGINX!\e[0m"
    exit
fi

echo -e "\e[44mDEPLOY:\e[0m\e[42mSUCESSO!\e[0m"
COMANDOSPARASERVIDOR
then
    echo -e "\e[44mDEPLOY:\e[0m \e[91mCONEXÃO AO SERVIDOR \e[96m$serverIP \e[0m Falhou!"
    exit
fi