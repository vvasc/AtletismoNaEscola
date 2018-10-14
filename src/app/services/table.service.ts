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
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
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
      escola: {
        title: 'Colégio',
        type: 'string',
      },
      ano: {
        title: 'Ano',
        type: 'string',
      },
    },
  };
  pontuacoes = {
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
      titulopratica: {
        title: 'Título Atividade Prática',
        type: 'string',
      },
      tituloquiz: {
        title: 'Título Quiz',
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

  constructor() { }

  setEdit(edit = false) {
    this.basic.actions.edit = edit;
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
      case 'pontuacoes': {
        column = this.pontuacoes;
        break;
      }
      case 'atividades': {
        column = this.atividades;
        break;
      }
      case 'quizes': {
        column = this.quizes;
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


