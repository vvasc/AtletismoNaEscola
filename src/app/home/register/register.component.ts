import { NotificacaoService } from './../../services/notificacao.service';
import { AuthService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {


  constructor(
    private authService: AuthService,
    private notificacao: NotificacaoService,
  ) { }

  ngOnInit() {
  }


  onSubmit(formValue: any) {
    this.authService.signup(formValue)
      .subscribe(
        response => {
          this.notificacao.ngxtoaster('Sucesso', 'Cadastro efetuado com sucesso!', true);
                },
        error => {
          this.notificacao.ngxtoaster('Erro', 'Cadastro inválido', false);
                });
  }
}
