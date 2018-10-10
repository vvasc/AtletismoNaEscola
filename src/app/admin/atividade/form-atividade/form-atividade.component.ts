import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-form-atividade',
  templateUrl: './form-atividade.component.html',
  styleUrls: ['./form-atividade.component.scss'],
})
export class FormAtividadeComponent implements OnInit {
  @Input() quizes: Observable<any>;
  @Input() provas: any;
  @Output() formValue = new EventEmitter();
  formAtividade: FormGroup;

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

}
