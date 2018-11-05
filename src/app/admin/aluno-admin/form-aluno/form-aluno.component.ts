import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-form-aluno',
  templateUrl: 'form-aluno.component.html',
})

export class FormAlunoComponent implements OnInit, OnChanges {
  @Input() professoresAsync: Observable<any>;
  @Input() resolvedAluno: any = null;
  @Output() formEmitter = new EventEmitter();
  formAluno: FormGroup = null;

  constructor(private formBuilder: FormBuilder) { }

  passwordValidator = (control: AbstractControl) => {
    // tslint:disable-next-line:max-line-length
    return (control.get('password').value !== control.get('confirmPassword').value && !this.resolvedAluno) ? {MatchPassword: true} : null;
  }

  ngOnInit() {
    this.formAluno = this.formBuilder.group({
      fullName: ['', Validators.required],
      emailAddress: ['', Validators.email],
      ano: ['', Validators.required],
      professor: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validator: this.passwordValidator,
    });

    this.onFormValueChanges();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('resolvedAluno' in changes && !changes.resolvedAluno.firstChange) {
      this.formAluno.clearValidators();
      this.formAluno.get('password').clearValidators();
      this.formAluno.get('confirmPassword').clearValidators();
      this.formAluno.patchValue(changes.resolvedAluno.currentValue);
      this.formAluno.controls['password'].setValue(null);
      this.formAluno.controls['confirmPassword'].setValue(null);
    }
  }

  onFormValueChanges() {
    this.formAluno.valueChanges.subscribe(form => {
      this.formEmitter.emit(this.formAluno);
    });
  }

}
