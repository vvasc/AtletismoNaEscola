// tslint:disable-next-line
import { ConfirmationModalComponent } from './../../../../@core/components/confirmation-modal/confirmation-modal.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { QuizSailsService } from '../../../../services/quiz-sails.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs/operators';
import { NotificacaoService } from '../../../../services/notificacao.service';

@Component({
  selector: 'ngx-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.scss'],
})
export class ProvaComponent implements OnInit {
  catID$ = new Subject<string>();
  QuestoesAsync: Observable<any>;
  QuestaoIdAsync: Observable<any>;
  QuestaoResolver: any;
  deleted;

  constructor(
    private quizSailsService: QuizSailsService,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService,
    private notificacao: NotificacaoService,
  ) { }

  ngOnInit() {
    this.QuestoesAsync = this.quizSailsService.getAllQuestoes();
  }

  resolver(event: any) {
    this.notificacao.ngxtoaster('', 'Questão Selecionada!', true, {timeOut: 600, easeTime: 0});
    this.QuestaoResolver = event;
  }

  deleteQuestao(event) {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '40%',
      data: {
        header: 'Aviso!',
        text: `Você realmente deseja deletar a seguinte questão? Ela será removida de
        qualquer quiz que a contém:   ${event.Pergunta}?`,
        warning: false,
      },
      disableClose: true,
    });
    dialogRef.afterClosed().pipe(
      tap(res => {
        if (res) {
          this.spinner.show();
          this.quizSailsService.deleteQuestao(event.id)
          .subscribe((succ) => {
            this.deleted = event.id;
            this.SpinnerTimeout();
            this.notificacao.ngxtoaster('Questão', 'Questão Deletada!', true);
          }, (err) => {
            this.SpinnerTimeout();
            this.notificacao.ngxtoaster('Questão', 'Algo deu errado!', false);
          });
        }
      }),
    ).subscribe();
  }

  SpinnerTimeout() {
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

}
