import { AuthService } from '../../../services/login.service';
import { AccountService } from '../../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { ColegioService } from '../../../services/colegio.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificacaoService } from '../../../services/notificacao.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'ngx-create-diretor',
  templateUrl: './create-diretor.component.html',
  styleUrls: ['./create-diretor.component.scss'],
})
export class CreateDiretorComponent implements OnInit {
  escolasAsync: Observable<any>;
  selectedEscola: any;
  formDiretor;
  querying = false;
  user;

  constructor(
    private colegioService: ColegioService,
    private spinner: NgxSpinnerService,
    private notificacao: NotificacaoService,
    private accountService: AccountService,
    private authservice: AuthService,
  ) { }

  ngOnInit() {
    this.authservice.isLogged().subscribe(user => {
      this.user = user;
      if (user.role === 'superadmin') {
        this.escolasAsync = this.colegioService.getAllColegio();
      } else {
        const arr = [];
        arr.push(user.escola);
        this.escolasAsync = of(arr);
      }
    });
  }

  resolveForm(event) {
    this.formDiretor = event;
  }

  scroll(el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  criarDiretor() {
    const formval = this.formDiretor.value;
    const ACCOUNT = {
      emailAddress: formval.emailAddress,
      password: formval.password,
      fullName: formval.fullName,
      escola: formval.escola,
      ano: formval.ano,
      role: 'diretor',
    };

    this.querying = true;
    this.spinner.show();
    this.accountService.createAccount(ACCOUNT).subscribe(success => {
      this.querying = false;
      this.spinnerTimeout();
      this.notificacao.ngxtoaster('Diretor', 'Criado com Sucesso!', true);
      if (this.user.role === 'diretor') {
        this.formDiretor.controls['emailAddress'].reset();
        this.formDiretor.controls['password'].reset();
        this.formDiretor.controls['confirmPassword'].reset();
        this.formDiretor.controls['ano'].reset();
        this.formDiretor.controls['fullName'].reset();
      } else {
        this.formDiretor.reset();
        this.selectedEscola = null;
      }
    }, err => {
      this.querying = false;
      this.spinnerTimeout();
      const erromsg = (err.error.code === 'E_UNIQUE') ? 'Já existe Diretor com este email!' : 'Erro!';
      this.notificacao.ngxtoaster('Criação Falhou!', erromsg, false);
    });
  }

  spinnerTimeout() {
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

}
