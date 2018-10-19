import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PontuacaoService } from '../../../services/pontuacao.service';
import { NotificacaoService } from '../../../services/notificacao.service';
import { map } from 'rxjs/operators';

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

  constructor(
    private pontuacaoservice: PontuacaoService,
    private notificaoservice: NotificacaoService,
    private notificacao: NotificacaoService,
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

  editPontuacao(event) {
    const formval = this.formPontuacao.value;
    this.pontuacaoservice.patchPontuacao(this.pontuacaoselecionada.id, formval).subscribe(succ => {
      this.notificacao.ngxtoaster('Sucesso!', 'Pontuação Editada com Sucesso!', true);
      this.formPontuacao.reset();
    }, err => {
      const errmsg = (err.error.code === 'E_UNIQUE') ? '' : 'Falha na conexão!';
      this.notificacao.ngxtoaster('ERRO!', errmsg, false);
    });
  }

  refreshPontuacao() {
    this.pontuacaoObs = this.pontuacaoservice.getAllPontuacao().pipe(
      map((pontuacoes: any) => {
        pontuacoes.forEach(pontuacao => {
          // Refatorando objeto pra ser usado na table
          (pontuacao.owner) ? pontuacao['pontuacao'] = pontuacao.owner.titulo : null;
        });
        return pontuacoes;
      }),
    );
    this.pontuacaoObs.subscribe(null, err => {
      this.notificacao.ngxtoaster('ERRO!', 'Falha na conexão!', false);
    });
  }

  getForm(form) {
    this.formPontuacao = form;
  }

  deletar(event) {
    this.pontuacaoservice.deletarPontuacao(this.pontuacaoselecionada.id).subscribe(succ => {
      this.notificacao.ngxtoaster('Sucesso!', 'Pontuação deletada com Sucesso!', true);
      this.formPontuacao.reset();
    }, err => {
      const errmsg = (err.error.code === 'E_UNIQUE') ? '' : 'Falha na conexão!';
      this.notificacao.ngxtoaster('ERRO!', errmsg, false);
    });
  }

}
