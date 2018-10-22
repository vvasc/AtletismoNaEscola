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
  disabled = true;

  constructor(
    private colegioService: ColegioService,
    private notificacao: NotificacaoService,
  ) { }

  ngOnInit() { }

  getForm(form) {
    this.formColegio = form;
    this.disabled = !this.formColegio.valid;
  }

  onSubmit() {
    this.colegioService.createColegio(this.formColegio.value).subscribe(res => {
      this.notificacao.ngxtoaster('Conteúdo', 'Criado com Sucesso!', true);
      this.formColegio.reset();
    }, err => {
      this.notificacao.ngxtoaster('Criação Falhou!', 'Erro na conexão!', false);
    });
  }

}
