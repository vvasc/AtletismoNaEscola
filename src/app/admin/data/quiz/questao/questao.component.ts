import { QuizService } from './../../../../services/quiz.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.scss'],
})
export class QuestaoComponent implements OnInit {
  formQuiz: FormGroup;
  formAlternativas: FormArray;

  constructor(
    private formBuilder: FormBuilder,
    private quizService: QuizService,
  ) { }

  ngOnInit() {
    this.formQuiz = this.formBuilder.group({
      Pergunta: ['', Validators.required],
      RespostaCorreta: '',
      Alternativas: this.formBuilder.array([this.createAlternativa(), this.createAlternativa()]),
      id: '',
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
    this.quizService.addQuestao(value);
  }


}
