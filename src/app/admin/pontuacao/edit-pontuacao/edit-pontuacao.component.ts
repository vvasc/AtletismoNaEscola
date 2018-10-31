// tslint:disable-next-line
import { ConfirmationModalComponent } from './../../../@core/components/confirmation-modal/confirmation-modal.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PontuacaoService } from '../../../services/pontuacao.service';
import { NotificacaoService } from '../../../services/notificacao.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'ngx-edit-pontuacao',
  templateUrl: './edit-pontuacao.component.html',
  styleUrls: ['./edit-pontuacao.component.scss'],
})
export class EditPontuacaoComponent implements OnInit {
  pontuacaoselecionada;
  formPontuacao: FormGroup;
  pontuacaoObs: Observable<any>;
  querying: boolean = false;
  delete: any = [];
  update: any = [];

  constructor(
    private pontuacaoservice: PontuacaoService,
    private notificaoservice: NotificacaoService,
    private notificacao: NotificacaoService,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.pontuacaoObs = this.pontuacaoservice.getAllPontuacao().pipe(
      map((pontuacoes: any) => {
        pontuacoes.map(pontuacao => { // refatorando objeto para ser usado na table
          pontuacao.nomealuno = pontuacao.aluno.fullName;
          pontuacao.anoaluno = pontuacao.aluno.ano;
          pontuacao.atividadetitulo = pontuacao.atividade.titulo;
        });
        return pontuacoes;
      }),
    );
    this.pontuacaoObs.subscribe(null, err => {
      this.notificaoservice.ngxtoaster('Erro!', 'Não foi possível carregar Pontuações!', false);
    });
  }

  selectPontuacao(event) {
    this.pontuacaoselecionada = event;
  }

  editPontuacao() {
    const formval = this.formPontuacao.value;
    this.querying = true;
    this.spinner.show();
    this.pontuacaoservice.patchPontuacao(this.pontuacaoselecionada.id, formval).subscribe(succ => {
      this.querying = false;
      this.SpinnerTimeout();
      this.update = succ;
      this.update['nomealuno'] = succ['aluno'].fullName;
      this.update['anoaluno'] = succ['aluno'].ano;
      this.update['atividadetitulo'] = succ['atividade'].titulo;
      this.pontuacaoselecionada = null;
      this.notificacao.ngxtoaster('Sucesso!', 'Pontuação Editada com Sucesso!', true);
      this.formPontuacao.reset();
    }, err => {
      this.querying = false;
      this.SpinnerTimeout();
      const errmsg = (err.error.code === 'E_UNIQUE') ? '' : 'Falha na conexão!';
      this.notificacao.ngxtoaster('ERRO!', errmsg, false);
    });
  }

  scroll(el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  getForm(form) {
    this.formPontuacao = form;
  }

  deletar(event) {
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
          this.pontuacaoservice.deletarPontuacao(this.pontuacaoselecionada.id)
          .subscribe((succ) => {
            this.querying = false;
            this.delete = this.pontuacaoselecionada.id;
            this.pontuacaoselecionada = null;
            this.SpinnerTimeout();
            this.formPontuacao.reset();
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
