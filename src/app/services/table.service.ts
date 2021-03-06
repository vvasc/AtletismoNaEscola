import { Injectable } from '@angular/core';

@Injectable()
export class TableService {
  basic = {
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true, // Para emitir o evento de confirmamento de edicao da linha
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    noDataMessage: 'Sem dado para mostrar!',
  };
  questao = {
    columns: {
      Pergunta: {
        title: 'Pergunta',
        type: 'string',
      },
      RespostaCorreta: {
        title: 'Resposta Correta',
        type: 'string',
      },
    },
  };
  conteudo = {
    columns: {
      titulo: {
        title: 'Título',
        type: 'string',
      },
    },
  };
  editconteudo = {
    columns: {
      titulo: {
        title: 'Título Conteúdo',
        type: 'string',
      },
      tituloquiz: {
        title: 'Título Quiz',
        type: 'string',
      },
    },
  };
  alunos = {
    columns: {
      fullName: {
        title: 'Nome Completo',
        type: 'string',
      },
      nomeEscola: {
        title: 'Colégio',
        type: 'string',
      },
      ano: {
        title: 'Ano',
        type: 'string',
      },
    },
  };
  pontuacoesQuiz = {
    columns: {
      nomealuno: {
        title: 'Nome do Aluno',
        type: 'string',
      },
      anoaluno: {
        title: 'Ano',
        type: 'string',
      },
      quiztitulo: {
        title: 'Quiz',
        type: 'string',
      },
    },
  };
  pontuacoesAtividade = {
    columns: {
      nomealuno: {
        title: 'Nome do Aluno',
        type: 'string',
      },
      anoaluno: {
        title: 'Ano',
        type: 'string',
      },
      atividadetitulo: {
        title: 'Atividade',
        type: 'string',
      },
    },
  };
  atividades = {
    columns: {
      titulo: {
        title: 'Título Atividade',
        type: 'string',
      },
    },
  };
  colegio = {
    columns: {
      nome: {
        title: 'Nome',
        type: 'string',
      },
      endereco: {
        title: 'Endereço',
        type: 'string',
      },
    },
  };
  quizes = {
    columns: {
      titulo: {
        title: 'Título Quiz',
        type: 'string',
      },
      id: {
        title: 'Identificação',
        type: 'string',
      },
    },
  };
  professores = {
    columns: {
      fullName: {
        title: 'Nome Completo',
        type: 'string',
      },
      nomeEscola: {
        title: 'Colégio',
        type: 'string',
      },
      ano: {
        title: 'Ano',
        type: 'string',
      },
      emailAddress: {
        title: 'Email',
        type: 'string',
      },
    },
  };
  diretores = {
    columns: {
      fullName: {
        title: 'Nome Completo',
        type: 'string',
      },
      nomeEscola: {
        title: 'Colégio',
        type: 'string',
      },
      emailAddress: {
        title: 'Email',
        type: 'string',
      },
    },
  };

  constructor() { }

  setEdit(edit = false) {
    this.basic.actions.edit = edit;
  }

  setDelete(del = false) {
    this.basic.actions.delete = del;
  }

  getColumns(tipo: any) {
    let column: any;
    switch (tipo) {
      case 'questao': {
        column = this.questao;
        break;
      }
      case 'conteudo': {
        column = this.conteudo;
        break;
      }
      case 'editconteudo': {
        column = this.editconteudo;
        break;
      }
      case 'alunos': {
        column = this.alunos;
        break;
      }
      case 'pontuacoesAtividade': {
        column = this.pontuacoesAtividade;
        break;
      }
      case 'pontuacoesQuiz': {
        column = this.pontuacoesQuiz;
        break;
      }
      case 'atividades': {
        column = this.atividades;
        break;
      }
      case 'colegio': {
        column = this.colegio;
        break;
      }
      case 'quizes': {
        column = this.quizes;
        break;
      }
      case 'professores': {
        column = this.professores;
        break;
      }
      case 'diretores': {
        column = this.diretores;
        break;
      }
    }
    return  { ...this.basic, ...column } ;
  }

  getAddButton() {
    return {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    };
  }

  getDeleteButton() {
    return {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    };
  }

}


