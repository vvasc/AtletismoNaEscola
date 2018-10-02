import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-form-conteudo',
  templateUrl: './form-conteudo.component.html',
  styleUrls: ['./form-conteudo.component.scss'],
})
export class FormConteudoComponent implements OnInit, OnChanges {
  @Input() dados;

  @Input() quizes: Array<any>; // dados para o select de quizes
  @Output() formValue = new EventEmitter();

  formConteudo: FormGroup;
  quizselecionado; // Opcao no select que será colorido diferente,
  // significando que esse era o originalmente associado ao conteudo selecionado

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formConteudo = this.fb.group({
      texto: ['', Validators.required],
      titulo: ['', Validators.required],
      owner: [''],
    });

    this.formConteudo.valueChanges.subscribe(form => {
      this.formValue.emit(this.formConteudo);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.dados && this.formConteudo) {
      let ownerid = '';
      this.quizselecionado = null;
      if (changes.dados.currentValue.owner) {
        this.quizselecionado = changes.dados.currentValue.owner;
        ownerid = changes.dados.currentValue.owner.id;
      }
      this.formConteudo.setValue({
        titulo: changes.dados.currentValue.titulo,
        owner: ownerid,
        texto: changes.dados.currentValue.texto,
      });
    }
  }
}
