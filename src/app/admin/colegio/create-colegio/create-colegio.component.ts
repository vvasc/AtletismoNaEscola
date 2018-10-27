import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ColegioService } from '../../../services/colegio.service';
import { NotificacaoService } from '../../../services/notificacao.service';

@Component({
  selector: 'ngx-create-colegio',
  templateUrl: './create-colegio.component.html',
  styleUrls: ['./create-colegio.component.scss'],
})

export class CreateColegioComponent implements OnInit {
  formColegio: FormGroup;
  querying = false;

  constructor(
    private colegioService: ColegioService,
    private notificacao: NotificacaoService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() { }

  getForm(form) {
    this.formColegio = form;
  }

  onSubmit() {
    this.spinner.show();
    this.querying = true;
    this.colegioService.createColegio(this.formColegio.value).subscribe(res => {
      this.SpinnerTimeout();
      this.querying = false;
      this.notificacao.ngxtoaster('Conteúdo', 'Criado com Sucesso!', true);
      this.formColegio.reset();
    }, err => {
      this.SpinnerTimeout();
      this.querying = false;
      this.notificacao.ngxtoaster('Criação Falhou!', 'Erro na conexão!', false);
    });
  }

  SpinnerTimeout() {
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

}
