import { AuthService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  titleAlert = 'Campo inválido!';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  get f() { return this.formLogin.controls; }

  onSubmit() {
    this.authService.login(this.f.obj.value)
      .subscribe(
        response => {
          this.router.navigate(['/aluno']);
                },
                error => {
                });
  }
}
