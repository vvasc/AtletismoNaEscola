import { AuthService } from './../../../../services/login.service';
import { PontuacaoService } from './../../../../services/pontuacao.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'ngx-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent implements OnInit {
  userinfo;
  rankingtabela;
  medalha;
  colocacao ;

  constructor(
    private pontuacaoservice: PontuacaoService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    combineLatest([this.pontuacaoservice.getPontuacaoColegio(), this.authService.isLogged()])
      .subscribe(([pontuacoesColegio, user]) => {
        this.userinfo = user;
        this.rankingtabela = pontuacoesColegio;
        // Pega as pontuacoes do colegio ordenados por total de pontos,do maior para o menor
        pontuacoesColegio.map((element, index) => {
          if (element.id === user.id) {
            if (index === 0)
              this.medalha = '../../../../assets/medalha_ouro.png';
            else if (index === 1)
              this.medalha = '../../../../assets/medalha_prata.png';
            else if (index === 2)
              this.medalha = '../../../../assets/medalha_bronze.png';
            else
              this.medalha = null;
            this.colocacao = index + 1;
          }
        });
      });
  }

}
