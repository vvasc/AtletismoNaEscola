import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-form-conta',
  templateUrl: './form-conta.component.html',
  styleUrls: ['./form-conta.component.scss'],
})
export class FormContaComponent implements OnInit, OnChanges {
  formConta: FormGroup;
  @Input() escola; // Escola selecionada
  @Output() formValue = new EventEmitter();
  @Input() conta; // Dados para serem preenchidos da conta

  constructor(private fb: FormBuilder) { }

  passwordValidator =  (control: AbstractControl) => {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
    return (password !== confirmPassword) ? {MatchPassword: true} : null;
  }

  ngOnInit() {
    this.formConta = this.fb.group({
      emailAddress: ['', [Validators.required, Validators.email, Validators.maxLength(200)]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      fullName: ['', [Validators.required, Validators.maxLength(120)]],
      escola: ['', [Validators.required, Validators.pattern('[0-9]')]],
      nomeEscola: [{value: '', disabled: true}],
      ano: ['', [Validators.required, Validators.pattern('[0-9]')]],
    }, {
      validator: this.passwordValidator,
    });
    this.formConta.valueChanges.subscribe(form => {
      this.formValue.emit(this.formConta);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('escola' in changes && this.formConta && !changes.escola.firstChange) {
      const data = changes.escola.currentValue;
      const [id, nome] = (data === null) ? [null, null] : [data.id, data.nome];
      this.formConta.controls['escola'].setValue(id);
      this.formConta.controls['nomeEscola'].setValue(nome);
    }
    if ('conta' in changes && this.formConta && !changes.conta.firstChange) {
      const conta = changes.conta.currentValue;
      
    }
  }

}
