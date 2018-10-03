import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-form-pontuacao',
  templateUrl: './form-pontuacao.component.html',
  styleUrls: ['./form-pontuacao.component.scss'],
})
export class FormPontuacaoComponent implements OnInit, OnChanges {
  @Input() atividade; // Recebe a atividade, no create pontuacao
  @Input() aluno; // Recebe o aluno, no create pontuacao
  @Input() pontuação; // Recebe a pontuacao, no caso da edit-pontuacao
  @Output() formValue = new EventEmitter(); // Emite o valor do forms
  formPontuacao: FormGroup;

  nomeAluno; // Usado para mostrar o nome do usuario, ja que o forms aceita apenas o ID
  tituloAtividade; // Usado para mostrar o titulo da atividade, ja que o forms aceita apenas o ID

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formPontuacao = this.fb.group({
      pontuacaoAula: ['', Validators.required],
      aluno: ['', Validators.required],
      atividade: ['', Validators.required],
    });

    this.formPontuacao.valueChanges.subscribe(value => {
      this.formValue.emit(this.formPontuacao);
    });
  }

  ngOnChanges(changes) {
    if (changes.atividade && changes.atividade.currentValue) { // Se trocou a atividade, seta os campos correspondentes
      this.tituloAtividade = changes.atividade.currentValue.titulo;
      this.formPontuacao.controls['atividade'].setValue(changes.atividade.currentValue.id);
    }
    if (changes.aluno && changes.aluno.currentValue) { // Se trocou o aluno, seta os campos correspondentes
      this.nomeAluno = changes.aluno.currentValue.fullName;
      this.formPontuacao.controls['aluno'].setValue(changes.aluno.currentValue.id);
    }
    if (changes.pontuacao && changes.pontuacao.currentValue) { // Se trocou a pontuacao, seta os campos correspondentes
      this.nomeAluno = changes.pontuacao.aluno.fullName;
      this.tituloAtividade = changes.pontuacao.atividade.titulo;
      this.formPontuacao.setValue({
        aluno: changes.pontuacao.aluno.id,
        atividade: changes.pontuacao.atividade.id,
        pontuacaoAula: changes.pontuacao.pontuacaoAula,
      });
    }
  }

}
