import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { QuizSailsService } from '../../../../services/quiz-sails.service';
import { NotificacaoService } from '../../../../services/notificacao.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'ngx-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.scss'],
})
export class QuestaoComponent implements OnInit {
  formQuiz: FormGroup;
  formAlternativas: FormArray;
  querying = false;

  constructor(
    private formBuilder: FormBuilder,
    private quizService: QuizSailsService,
    private notificacao: NotificacaoService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.formQuiz = this.formBuilder.group({
      Pergunta: ['', Validators.required],
      RespostaCorreta: '',
      Alternativas: this.formBuilder.array([this.createAlternativa(), this.createAlternativa()]),
      // id: '',
    });
    this.formAlternativas = <FormArray>this.formQuiz.get('Alternativas');
  }

  createAlternativa() {
    return new FormControl(null, Validators.required);
  }

  addAlternativa() {
    (<FormArray>this.formQuiz.get('Alternativas')).push(this.createAlternativa());
  }

  removeAlternativa() {
    (<FormArray>this.formQuiz.get('Alternativas')).removeAt(+this.formAlternativas.length - 1);
  }

  onSubmit(value: any) {
    this.spinner.show();
    this.quizService.createQuestao(value).subscribe(res => {
      this.spinnerTimeout();
      this.querying = false;
      this.notificacao.ngxtoaster('Questão', 'Criado com Sucesso!', true);
      this.formQuiz.reset();
    }, err => {
      this.spinnerTimeout();
      this.querying = false;
      this.notificacao.ngxtoaster('Criação Falhou!', 'Erro na conexão!', false);
    });
  }

  spinnerTimeout() {
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }


}
