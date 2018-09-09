import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnDestroy, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'ngx-select-prova',
  templateUrl: './select-prova.component.html',
  styleUrls: ['./select-prova.component.scss'],
})
export class SelectProvaComponent implements OnInit, OnDestroy, DoCheck {
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
    this.formQuestoes = <FormArray>this.formProva.get('Alternativas');
  }

  ngDoCheck() {
    this.patchValues(this.questao);
  }

  ngOnDestroy() {
  }

  patchValues(questao: any) {
    this.addQuestao(questao);
  }

  addQuestao(questao: any) {
    (<FormArray>this.formProva.get('Alternativas')).push(new FormControl(questao.id, Validators.required));
  }

}
