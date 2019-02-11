import { Component, OnInit, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-form-pontuacao',
  templateUrl: './form-pontuacao.component.html',
  styleUrls: ['./form-pontuacao.component.scss'],
})
export class FormPontuacaoComponent implements OnInit, OnChanges {
  @Input() atividade; // Recebe a atividade, no create pontuacao
  @Input() aluno; // Recebe o aluno, no create pontuacao
  @Input() pontuacao; // Recebe a pontuacao, no caso da edit-pontuacao
  @Output() formValue = new EventEmitter(); // Emite o valor do forms
  @Input() FormType: string; // Especifica se é para Atividade ou Pontuação
  formPontuacao: FormGroup;

  nomeAluno; // Usado para mostrar o nome do usuario, ja que o forms aceita apenas o ID
  tituloAtividade; // Usado para mostrar o titulo da atividade, ja que o forms aceita apenas o ID

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formPontuacao = this.fb.group({
      pontuacao: ['', Validators.required],
      aluno: ['', Validators.required],
    });
    // Adiciona campo de acordo com o tipo de pontuacao (quiz ou atividade)
    this.formPontuacao.addControl(this.FormType, new FormControl('', Validators.required));
    this.formPontuacao.valueChanges.subscribe(value => {
      this.formValue.emit(this.formPontuacao);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // tslint:disable-next-line:max-line-length
    if ('atividade' in changes && !changes.atividade.firstChange) { // Se trocou a atividade, seta os campos correspondentes
      if (changes.atividade.currentValue) {
        this.tituloAtividade = changes.atividade.currentValue.titulo;
        this.formPontuacao.controls['atividade'].setValue(changes.atividade.currentValue.id);
      } else {
        this.tituloAtividade = '';
        this.formPontuacao.controls['atividade'].reset();
      }
    }
    if ('quiz' in changes && !changes.quiz.firstChange) { // Se trocou a quiz, seta os campos correspondentes
      if (changes.quiz.currentValue) {
        this.tituloAtividade = changes.quiz.currentValue.titulo;
        this.formPontuacao.controls['quiz'].setValue(changes.quiz.currentValue.id);
      } else {
        this.tituloAtividade = '';
        this.formPontuacao.controls['quiz'].reset();
      }
    }
    if ('aluno' in changes && !changes.aluno.firstChange) { // Se trocou o aluno, seta os campos correspondentes
      if (changes.aluno.currentValue) {
        this.nomeAluno = changes.aluno.currentValue.fullName;
        this.formPontuacao.controls['aluno'].setValue(changes.aluno.currentValue.id);
      } else {
        this.nomeAluno = '';
        this.formPontuacao.controls['aluno'].reset();
      }
    }
    if ('pontuacao' in changes && !changes.pontuacao.firstChange) {
      // Se trocou a pontuacao, seta os campos correspondentes
      if (changes.pontuacao.currentValue) {
        const newval = changes.pontuacao.currentValue;
        this.nomeAluno = newval.aluno.fullName;
        if (this.FormType === 'atividade') {
          this.tituloAtividade = newval.atividade.titulo;
          this.formPontuacao.setValue({
            aluno: newval.aluno.id,
            atividade: newval.atividade.id,
            pontuacao: newval.pontuacao,
          });
        } else {
          this.tituloAtividade = newval.quiz.titulo;
          this.formPontuacao.setValue({
            aluno: newval.aluno.id,
            quiz: newval.quiz.id,
            pontuacao: newval.pontuacao,
          });
        }
      } else {
        this.formPontuacao.reset();
        this.tituloAtividade = '';
        this.nomeAluno = '';
      }
    }
  }

}
