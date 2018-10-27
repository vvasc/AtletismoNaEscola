import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-form-colegio',
  templateUrl: './form-colegio.component.html',
  styleUrls: ['./form-colegio.component.scss'],
})

export class FormColegioComponent implements OnInit, OnChanges {
  @Output() formValue = new EventEmitter();
  @Input() dados;

  formColegio: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.formColegio = this.formBuilder.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
    });

    this.formColegio.valueChanges.subscribe(form => {
      this.formValue.emit(this.formColegio);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('dados' in changes && this.formColegio) {
      if (changes.dados)
        this.formColegio.setValue({
          nome: changes.dados.currentValue.nome,
          endereco: changes.dados.currentValue.endereco,
        });
      else
        this.formColegio.reset();
    }
  }

}
