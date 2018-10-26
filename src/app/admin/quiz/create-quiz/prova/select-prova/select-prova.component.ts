import { CdkDragDrop, moveItemInArray, CdkDragExit } from '@angular/cdk/drag-drop';
import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { find, remove } from 'lodash';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs/operators';

import { QuizSailsService } from '../../../../../services/quiz-sails.service';
import {
  ConfirmationModalComponent,
} from './../../../../../@core/components/confirmation-modal/confirmation-modal.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificacaoService } from '../../../../../services/notificacao.service';

// tslint:disable-next-line:max-line-length
@Component({
  selector: 'ngx-select-prova',
  templateUrl: './select-prova.component.html',
  styleUrls: ['./select-prova.component.scss'],
})
export class SelectProvaComponent implements OnChanges, OnInit {
  @Input() questao: any = [];
  questaoAnterior: any;
  questoesSelected: any = [];
  formTitulo: FormGroup;

  constructor(
      public dialog: MatDialog,
      private spinner: NgxSpinnerService,
      private quizService: QuizSailsService,
      private formBuilder: FormBuilder,
      private notificacaoService: NotificacaoService,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    // tslint:disable-next-line:max-line-length
    if ('questao' in changes && changes.questao.currentValue !== changes.questao.previousValue) {
      !changes.questao.previousValue || changes.questao.previousValue.id !== changes.questao.currentValue.id ? this.patchValues(changes.questao.currentValue) : null;
    }
  }

  ngOnInit() {
    this.formTitulo = this.formBuilder.group({
      titulo: ['', Validators.required],
    });
  }

  patchValues(questao: any) {
    this.addQuestao(questao);
  }

  addQuestao(questao: any) {
    !find(this.questoesSelected, ['Pergunta', questao.Pergunta]) ? this.questoesSelected.push(questao) : null;
  }

  remove(event: CdkDragExit<any>) {
    remove(this.questoesSelected, ['Pergunta', event.item.data.Pergunta]);
  }

  removeAll() {
    this.questoesSelected = [];
  }

  createProva() {
    if (this.formTitulo.invalid) {
      this.notificacaoService.ngxtoaster('Erro', 'Erro no Preenchimento', false);
      return;
    }
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '40%',
      data: {
        header: 'Aviso!',
        text: 'Você deseja criar uma prova?',
        warning: false,
      },
      disableClose: true,
    });
    dialogRef.afterClosed().pipe(
      tap(res => {
        if (res === true) {
          this.spinner.show();
          this.quizService.createQuiz({
            titulo: this.formTitulo.value.titulo,
            questoes: [...this.questoesSelected.map(questoes => questoes.id)],
          });
        }
        setTimeout(() => {
          this.spinner.hide();
          this.formTitulo.reset();
          this.questoesSelected = [];
        }, 2000);
      }),
    ).subscribe();
  }

  dropped(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.questoesSelected,
      event.previousIndex,
      event.currentIndex,
    );
  }
}

