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


