import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-show-questao',
  template: `
    <div class="row">
      <form [formGroup]="formResposta">
        <div *ngFor="let alternativa of alternativas; let i = index">
        <label class="custom-control custom-radio">
          <input type="radio" formControlName="alternativa" class="custom-control-input" [value]="i">
          <span class="custom-control-indicator"></span>
          <span class="custom-control-description">{{alternativa}}</span>
        </label>
        </div>
      </form>
    </div>
  `,
})

export class ShowQuestaoComponent implements OnInit {
  @Input() alternativas;
  @Output() selected = new EventEmitter();

  formResposta: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formResposta = this.fb.group({
      alternativa: [null, Validators.required],
    });

    this.onFormChanges();
  }

  onFormChanges() {
    this.formResposta.valueChanges.subscribe(form => {
      this.selected.emit(form.alternativa);
    });
  }
}
