import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material';
import { find, remove } from 'lodash';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs/operators';

import { QuizSailsService } from '../../../../../services/quiz-sails.service';
import {
  ConfirmationModalComponent,
} from './../../../../../@core/components/confirmation-modal/confirmation-modal.component';

// tslint:disable-next-line:max-line-length
@Component({
  selector: 'ngx-select-prova',
  templateUrl: './select-prova.component.html',
  styleUrls: ['./select-prova.component.scss'],
})
export class SelectProvaComponent implements OnChanges {
  @Input() questao: any = [];
  questaoAnterior: any;
  questoesSelected: any = [];

  constructor(
      public dialog: MatDialog,
      private spinner: NgxSpinnerService,
      private quizService: QuizSailsService,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    // tslint:disable-next-line:max-line-length
    if ('questao' in changes && changes.questao.currentValue !== changes.questao.previousValue) {
      !changes.questao.previousValue || changes.questao.previousValue.id !== changes.questao.currentValue.id ? this.patchValues(changes.questao.currentValue) : null;
    }
  }

  patchValues(questao: any) {
    this.addQuestao(questao);
  }

  addQuestao(questao: any) {
    !find(this.questoesSelected, ['Pergunta', questao.Pergunta]) ? this.questoesSelected.push(questao) : null;
  }

  remove(questao: any) {
    remove(this.questoesSelected, ['Pergunta', questao.Pergunta]);
  }

  createProva() {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '40%',
      data: {
        header: 'Aviso!',
        text: 'Você deseja criar uma prova?',
      },
      disableClose: true,
    });
    dialogRef.afterClosed().pipe(
      tap(res => {
        if (res === true) {
          this.spinner.show();
          this.quizService.createQuiz({
            idConteudo: 'id',
            questoes: [...this.questoesSelected.map(questoes => questoes.id)],
          });
        }
        setTimeout(() => {
          this.spinner.hide();
        }, 2000);
      }),
    ).subscribe();
  }

}
