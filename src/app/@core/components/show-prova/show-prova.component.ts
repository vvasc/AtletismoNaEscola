import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { findIndex, difference, cloneDeep } from 'lodash';
import { MatDialog } from '@angular/material';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'ngx-show-prova',
  templateUrl: 'show-prova.component.html',
  styleUrls: ['./show-prova.component.scss'],
})

export class ShowProvaComponent implements OnInit, OnChanges {
  @Input() quizSelectedAsync: Observable<any>;
  @Output() respostasPreenchidas = new EventEmitter();
  respostas: any = [];
  quizSelected;
  questoesOrdenadas: any = [];

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('quizSelectedAsync' in changes && changes.quizSelectedAsync.currentValue) {
      changes.quizSelectedAsync.currentValue.subscribe( ([quiz]) => {
        if (quiz) {
          this.questoesOrdenadas = quiz.ordem.map(id => {
            let match;
            quiz.questoes.map(questao => {
              if (questao.id === id)
                match = questao;
            });
            return match;
          });
          this.quizSelected = quiz;
        }
      });
    }

  }

  resolverQuestao(alternativaSelected: any, idQuestao: any) {
    const wasAnswer = findIndex(this.respostas, res => {
      return res.id === idQuestao;
    });
    (wasAnswer === -1) ?
      this.respostas.push({ id: idQuestao, resposta: alternativaSelected }) :
      this.respostas[wasAnswer].resposta = alternativaSelected ;
  }

  finalizarQuiz(questoes: any, idQuiz: any) {
    const clonedQuestoes = cloneDeep(questoes);
    // tslint:disable-next-line:max-line-length
    const idsRespostas = this.respostas.sort((resposta1, resposta2) => resposta1.id < resposta2.id).map(resposta => resposta.id);
    const idsQuestoes = clonedQuestoes.sort((resposta1, resposta2) => resposta1.id < resposta2.id).map(questao => questao.id);
    // tslint:disable-next-line:max-line-length
    const questoesRespostas = clonedQuestoes.sort((resposta1, resposta2) => resposta1.id < resposta2.id).map(questao => {
      // Decrescenta 1 pois a primeira posicao de um array é 0
       return { id: questao.id, resposta: +questao.RespostaCorreta - 1 };
    });
    const diffids = difference(idsQuestoes, idsRespostas);
    if (diffids && diffids.length) {
      const dialogRef = this.dialog.open(ConfirmationModalComponent, {
        width: '40%',
        data: {
          header: 'Há questões não respondidas',
          text: 'Volte e termine de responder todo o quiz',
          warning: true,
        },
        disableClose: true,
      });
      dialogRef.afterClosed().subscribe();
    } else {
      let questoesCorretas = 0;
      this.respostas.map(questao => {
        const gabarito = questoesRespostas.find(resposta => resposta.id === questao.id);
        questoesCorretas += (questao.resposta === gabarito.resposta) ? 1 : 0;
      });
      this.respostasPreenchidas.emit({
        id: idQuiz,
        pontuacao: questoesCorretas,
      });
    }
  }
}
