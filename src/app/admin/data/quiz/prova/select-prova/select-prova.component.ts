// tslint:disable-next-line:max-line-length
import { ConfirmationModalComponent } from './../../../../../@core/components/confirmation-modal/confirmation-modal.component';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { find, remove } from 'lodash';
import { MatDialog } from '@angular/material';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'ngx-select-prova',
  templateUrl: './select-prova.component.html',
  styleUrls: ['./select-prova.component.scss'],
})
export class SelectProvaComponent implements OnInit, OnDestroy, OnChanges {
  @Input() questao: any = [];
  questaoAnterior: any;
  questoesSelected: any = [];
  formProva: FormGroup;
  formQuestoes: FormArray;

  constructor(
      private fb: FormBuilder,
      public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.formProva = this.fb.group({
      idConteudo: '',
      Questoes: this.fb.array([]),
      id: '',
    });
    this.formQuestoes = <FormArray>this.formProva.get('formQuestoes');
  }

  ngOnChanges(changes: SimpleChanges) {
    // tslint:disable-next-line:max-line-length
    if ('questao' in changes && changes.questao.currentValue !== changes.questao.previousValue && changes.questao.previousValue) {
      changes.questao.previousValue.id !== changes.questao.currentValue.id ? this.patchValues(changes.questao.currentValue) : null;
    }
  }

  ngOnDestroy() {
  }

  patchValues(questao: any) {
    this.addQuestao(questao);
  }

  createQuestao(questao) {
    return new FormControl(questao.id, Validators.required);
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
        text: 'Você realmente deseja criar uma prova?',
      },
      disableClose: true,
    });
    return dialogRef.afterClosed().pipe(
      tap(res => {
        if (res === true) {
          console.log(res);
        }
      }),
    );
  }

}
