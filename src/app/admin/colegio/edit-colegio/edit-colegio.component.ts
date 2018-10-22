import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { ColegioService } from '../../../services/colegio.service';
import { NotificacaoService } from '../../../services/notificacao.service';

@Component({
    selector: 'ngx-edit-colegio',
    templateUrl: './edit-colegio.component.html',
    styleUrls: ['./edit-colegio.component.scss'],
})

export class EditColegioComponent implements OnInit {
  colegioAsync: Observable<any>;
  colegioResolver: any;
  formColegio: FormGroup;
  disabled = true;
  update: any = [];

  constructor(
    private colegioService: ColegioService,
    private formBuilder: FormBuilder,
    private notificacao: NotificacaoService,
  ) { }

  ngOnInit() {
    this.formColegio = this.formBuilder.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
    });
    this.getAll();
  }

  getForm(form) {
    this.formColegio = form;
    this.disabled = (!this.formColegio.valid) || (!this.colegioResolver);
  }

  onSubmit() {
    this.colegioService.patchColegio(this.colegioResolver.id, this.formColegio.value).subscribe(res => {
      this.update = res;
      this.notificacao.ngxtoaster('Colégio', 'Editado com Sucesso!', true);
      this.formColegio.reset();
    }, err => {
      this.notificacao.ngxtoaster('Edição Falhou!', 'Erro na conexão!', false);
    });
  }

  resolver(event: any) {
    this.colegioResolver = event;
  }

  getAll() {
    this.colegioAsync = this.colegioService.getAllColegio();
  }

}
