import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ColegioService } from '../../../services/colegio.service';
import { NotificacaoService } from '../../../services/notificacao.service';
// tslint:disable-next-line
import { ConfirmationModalComponent } from './../../../@core/components/confirmation-modal/confirmation-modal.component';

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
  querying = false;
  delete;

  constructor(
    private colegioService: ColegioService,
    private formBuilder: FormBuilder,
    private notificacao: NotificacaoService,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService,
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
    this.querying = true;
    this.spinner.show();
    this.colegioService.patchColegio(this.colegioResolver.id, this.formColegio.value).subscribe(res => {
      this.querying = false;
      this.update = res;
      this.SpinnerTimeout();
      this.notificacao.ngxtoaster('Colégio', 'Editado com Sucesso!', true);
      this.formColegio.reset();
      this.colegioResolver = null;
    }, err => {
      this.querying = false;
      this.SpinnerTimeout();
      this.notificacao.ngxtoaster('Edição Falhou!', 'Erro na conexão!', false);
    });
  }

  resolver(event: any) {
    this.colegioResolver = event;
  }

  getAll() {
    this.colegioAsync = this.colegioService.getAllColegio();
  }

  deleteColegio() {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '40%',
      data: {
        header: 'Aviso!',
        text: 'Você realmente deseja deletar esse Colégio?',
      },
      disableClose: true,
    });
    dialogRef.afterClosed().pipe(
      tap(res => {
        if (res) {
          this.querying = true;
          this.spinner.show();
          this.colegioService.deleteColegio(this.colegioResolver.id)
          .subscribe((succ) => {
            this.querying = false;
            this.delete = this.colegioResolver.id;
            this.colegioResolver = null;
            this.SpinnerTimeout();
            this.formColegio.reset();
            this.notificacao.ngxtoaster('Colégio', 'Colégio Deletado!', true);
          }, (err) => {
            this.querying = false;
            this.SpinnerTimeout();
            this.notificacao.ngxtoaster('Colégio', 'Algo deu errado!', false);
          });
        }
      }),
    ).subscribe();
  }

  SpinnerTimeout() {
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
}
