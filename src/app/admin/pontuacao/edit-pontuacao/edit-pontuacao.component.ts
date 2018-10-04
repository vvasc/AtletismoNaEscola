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
  pontuacaoObs: Observable<any>;

  constructor(
    private pontuacaoservice: PontuacaoService,
    private notificaoservice: NotificacaoService,
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

}
