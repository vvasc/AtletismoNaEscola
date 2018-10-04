import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NotificacaoService } from './../../services/notificacao.service';
import { AuthService } from './../../services/login.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {


  constructor(
    private authService: AuthService,
    private notificacao: NotificacaoService,
    private unsubscribe: Subject<void> = new Subject(),
  ) { }

  ngOnInit() {
  }


  onSubmit(formValue: any) {
    this.authService.signup(formValue).pipe(takeUntil(this.unsubscribe))
      .subscribe(
      response => {
        this.notificacao.ngxtoaster('Sucesso', 'Cadastro efetuado com sucesso!', true);
      },
      error => {
        this.notificacao.ngxtoaster('Erro', 'Cadastro inválido', false);
      });
  }
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}

