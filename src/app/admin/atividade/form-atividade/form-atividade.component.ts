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
  @Output() formValue = new EventEmitter();
  formAtividade: FormGroup;
  highlighted;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formAtividade = this.formBuilder.group({
      titulo: ['', Validators.required],
    });

    this.formAtividade.valueChanges.subscribe(form => {
      this.formValue.emit(this.formAtividade);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selecionado && this.formAtividade) {
      const data = changes.selecionado.currentValue;
      if (data) {
        this.formAtividade.setValue({
          titulo: data.titulo,
        });
      } else
        this.formAtividade.reset();
    }
  }

}
