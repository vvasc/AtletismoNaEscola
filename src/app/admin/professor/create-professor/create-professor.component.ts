import { AccountService } from './../../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { ColegioService } from '../../../services/colegio.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificacaoService } from '../../../services/notificacao.service';

@Component({
  selector: 'ngx-create-professor',
  templateUrl: './create-professor.component.html',
  styleUrls: ['./create-professor.component.scss'],
})
export class CreateProfessorComponent implements OnInit {
  escolas;
  selectedEscola;
  formProfessor;
  querying = false;

  constructor(
    private colegioService: ColegioService,
    private spinner: NgxSpinnerService,
    private notificacao: NotificacaoService,
    private accountService: AccountService,
  ) { }

  ngOnInit() {
    this.escolas = this.colegioService.getAllColegio();
  }

  selectEscola(escola) {
    this.selectedEscola = escola;
  }

  resolveForm(event) {
    this.formProfessor = event;
  }

  criarProfessor() {
    const formval = this.formProfessor.value;
    const ACCOUNT = {
      emailAddress: formval.emailAddress,
      password: formval.password,
      fullName: formval.fullName,
      escola: formval.escola,
      ano: formval.ano,
      role: 'professor',
    };

    this.querying = true;
    this.spinner.show();
    this.accountService.createAccount(ACCOUNT).subscribe(success => {
      this.querying = false;
      this.spinnerTimeout();
      this.notificacao.ngxtoaster('Professor', 'Criado com Sucesso!', true);
      this.formProfessor.reset();
      this.selectedEscola = null;
    }, err => {
      this.querying = false;
      this.spinnerTimeout();
      const erromsg = (err.error.code === 'E_UNIQUE') ? 'Já existe Professor com este email!' : 'Erro!';
      this.notificacao.ngxtoaster('Criação Falhou!', erromsg, false);
    });
  }

  spinnerTimeout() {
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

}
