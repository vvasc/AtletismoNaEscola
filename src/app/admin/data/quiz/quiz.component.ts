import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  formQuiz: FormGroup;
  formAlternativas: FormArray;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formQuiz = this.formBuilder.group({
      Pergunta: [null, Validators.required],
      RespostaCorreta: null,
      Alternativas: this.formBuilder.array([this.createAlternativa()]),
      id: null,
    });
  }

  createAlternativa() {
    return new FormControl(null, Validators.required);
  }

  addAlternativa() {
    (<FormArray>this.formQuiz.get('Alternativas')).push(this.createAlternativa());
  }

  removeAlternativa(index: number) {
    (<FormArray>this.formQuiz.get('Alternativas')).removeAt(index);
  }

  onSubmit(value: any) {
    console.log(value);
  }

}
