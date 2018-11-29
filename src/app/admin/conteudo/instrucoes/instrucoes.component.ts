import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-instrucoes',
  template: `
    <nb-card>
      <nb-card-header>
        Instruções
      </nb-card-header>
      <nb-card-body>
        <h5>Adicionar Imagem</h5>
        <ol>
          <li>Clicar na botão que representa uma imagem, na barra de botões do editor de texto</li>
          <li>Na janela que aparece, cola o URL da imagem</li>
          <li>Na mesma janela, em "Alignment" selecionar a posição da
          imagem LEFT(Esquerda) CENTER(Centro) ou RIGHT(Direita)</li>
        </ol>
        <h5>Adicionar Video</h5>
        <ol>
          <li>
            <p>Escreva uma frase que servirá de marcador onde quer inserir o video,
            e aplica no texto o posicionamento desejado.</p>
            Exemplo: Você quer inserir um video de acrobacias centralizado, entao vc escreve algo tipo
            "video acrobacias 1" e aplica a centralizacao nesse texto. (provavelmente em sua propria linha)
          </li>
          <li>
            <p>
              No vídeo que será adicionado, no Youtube, clique em "Share"( ou compartilhar), depois "Embed"
              e copie a seção que começa e termina com  "&lt;iframe&gt;", por exemplo:</p>

              &lt;iframe width="560" height="315" src="https://www.youtube.com/embed/UG4n1pk4Uk8" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen&gt;&lt;/iframe&gt;
          </li>
          <li>
            Clique no botão "Source" do editor de texto, aperte o
            botão ctrl e a letra f juntos (ctrl + f) e digite a frase
            que você colocou como marcador (no nosso caso "video acrobacias 1") e cole o texto copiado do youtube
            no lugar dessa frase.
          </li>
          <li>
            Aperte novamente o botão "Source" e o vídeo já está adicionado.
            Aparecerá um espaço vazia onde estava a frase, ao clicar nesse espaço será selecionado
            um quadrado, esse quadrado é o vídeo que você copiou do youtube.
          </li>
        </ol>
      </nb-card-body>
    </nb-card>
  `,
  styleUrls: ['./instrucoes.component.scss'],
})
export class InstrucoesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
