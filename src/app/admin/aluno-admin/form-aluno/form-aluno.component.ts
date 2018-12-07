import { AuthService } from './../../../services/login.service';
import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'ngx-form-aluno',
  templateUrl: 'form-aluno.component.html',
})

export class FormAlunoComponent implements OnInit, OnChanges {
  @Input() resolvedAluno: any = null;
  @Output() formEmitter = new EventEmitter();
  formAluno: FormGroup = null;
  user_data; // Usado para setar a escola do aluno para a escola do professor/diretor logado

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
  ) { }

  passwordValidator = (control: AbstractControl) => {
    // tslint:disable-next-line:max-line-length
    return (control.get('password').value !== control.get('confirmPassword').value) ? {MatchPassword: true} : null;
  }

  ngOnInit() {
    this.formAluno = this.formBuilder.group({
      fullName: ['', Validators.required],
      emailAddress: ['', Validators.email],
      ano: ['', Validators.required],
      escola: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validator: this.passwordValidator,
    });

    this.auth.isLogged().subscribe(user => {
      this.user_data = user;
      this.formAluno.controls['escola'].setValue(user.escola.id);
    });

    this.onFormValueChanges();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('resolvedAluno' in changes && !changes.resolvedAluno.firstChange && changes.resolvedAluno.currentValue) {
      this.formAluno.clearValidators();
      this.formAluno.get('password').clearValidators();
      this.formAluno.get('confirmPassword').clearValidators();
      this.formAluno.patchValue(changes.resolvedAluno.currentValue);
      this.formAluno.get('password').setValue(null);
      this.formAluno.get('confirmPassword').setValue(null);
    }
  }

  onFormValueChanges() {
    this.formAluno.valueChanges.subscribe(form => {
      // tslint:disable-next-line:max-line-length
      if ((form.password !== null && form.password !== '') || (form.confirmPassword !== null && form.confirmPassword !== '')) {
        // Ativa o validators para a senha caso o usuario inserir algo nos campos, se deletar tira
        if (this.formAluno.validator === null) {
          this.formAluno.setValidators(this.passwordValidator);
          this.formAluno.get('password').setValidators(Validators.required);
          this.formAluno.get('confirmPassword').setValidators(Validators.required);
          this.formAluno.updateValueAndValidity();
        }
      } else if (this.formAluno.validator && this.resolvedAluno) {
        this.formAluno.clearValidators();
        this.formAluno.get('password').clearValidators();
        this.formAluno.get('password').setErrors(null);
        this.formAluno.get('confirmPassword').clearValidators();
        this.formAluno.get('confirmPassword').setErrors(null);
      }
      this.formEmitter.emit(this.formAluno);
    });
  }

}
