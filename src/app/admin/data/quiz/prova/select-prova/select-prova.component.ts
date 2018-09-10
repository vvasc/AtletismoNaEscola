import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnDestroy, OnInit, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { find, remove } from 'lodash';
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

  constructor(private fb: FormBuilder) { }

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

}
