import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-form-atividade',
  templateUrl: './form-atividade.component.html',
  styleUrls: ['./form-atividade.component.scss'],
})
export class FormAtividadeComponent implements OnInit {
  @Input() quizes: Array<any>;
  @Input() provas: Array<any>;
  @Output() formValue = new EventEmitter();
  formConteudo: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formConteudo = this.formBuilder.group({
      titulo: ['', Validators.required],
      quiz: ['', Validators.required],
      provaPratica: ['', Validators.required],
    });

    this.formConteudo.valueChanges.subscribe(form => {
      this.formValue.emit(this.formConteudo);
    });
  }

}
