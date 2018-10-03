import { NotificacaoService } from './../../services/notificacao.service';
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
    private notificacao: NotificacaoService,
  ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      emailAddress: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }


  onSubmit(formValue: any) {
    this.authService.login(formValue)
      .subscribe(
        response => {
          this.notificacao.ngxtoaster('Sucesso', 'Login efetuado com sucesso!', true);
          this.router.navigate(['/home/aluno']);
                },
        error => {
          this.notificacao.ngxtoaster('Erro', 'Usuário ou senha inválidos!', false);
                });
  }
}
