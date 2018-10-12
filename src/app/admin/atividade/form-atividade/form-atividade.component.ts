import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-form-atividade',
  templateUrl: './form-atividade.component.html',
  styleUrls: ['./form-atividade.component.scss'],
})
export class FormAtividadeComponent implements OnInit, OnChanges {
  @Input() selecionado;
  @Input() quizes: Observable<any>;
  @Input() provas: Observable<any>;
  @Output() formValue = new EventEmitter();
  formAtividade: FormGroup;
  highlighted;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formAtividade = this.formBuilder.group({
      titulo: ['', Validators.required],
      quiz: ['', Validators.required],
      provaPratica: ['', Validators.required],
    });

    this.formAtividade.valueChanges.subscribe(form => {
      this.formValue.emit(this.formAtividade);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selecionado && this.formAtividade) {
      let quizid = '';
      this.highlighted = null;
      if (changes.selecionado.currentValue.quiz[0]) {
        this.highlighted = changes.selecionado.currentValue.quiz[0];
        quizid = changes.selecionado.currentValue.quiz[0].id;
      }
      this.formAtividade.setValue({
        titulo: changes.selecionado.currentValue.titulo,
        quiz: quizid,
        provaPratica: changes.selecionado.currentValue.provaPratica[0].id,
      });
    }
  }

}
