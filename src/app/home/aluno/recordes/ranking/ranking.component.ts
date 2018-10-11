import { AuthService } from './../../../../services/login.service';
import { PontuacaoService } from './../../../../services/pontuacao.service';
import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'ngx-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent implements OnInit {
  userinfo;
  rankingtabelaObs;
  medalha;
  colocacao ;

  constructor(
    private pontuacaoservice: PontuacaoService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.authService.isLogged().pipe(
      mergeMap(user => { // Pra nao dar 2 subscribe
        this.userinfo = user;
        this.rankingtabelaObs = this.pontuacaoservice.getPontuacaoColegio();
        return this.rankingtabelaObs;
      }),
    ).subscribe((pontuacoesColegio: Array<any>) => {
      // Pega as pontuacoes do colegio ordenados por total de pontos,do maior para o menor
      pontuacoesColegio.map((element, index) => {
        if (element.id === this.userinfo.id) {
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
