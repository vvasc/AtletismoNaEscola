import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-form-conteudo',
  templateUrl: './form-conteudo.component.html',
  styleUrls: ['./form-conteudo.component.scss'],
})
export class FormConteudoComponent implements OnInit {
  @Input()
  set dados(dados) { // Pra iniciar o form com todos os dados do conteudo, no caso do editConteudo
    if (this.formConteudo) {
      let ownerid = ''; // Inicia como nada
      if (dados.owner) { // Caso tiver quiz associada ja,
        this.quizselecionado = dados.owner; // Adiciona a quiz já associada
        ownerid = this.quizselecionado.id;
      }
      this.formConteudo.setValue({
        titulo: dados.titulo,
        owner: ownerid,
        texto: dados.texto,
      });
    }
  }

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

}
