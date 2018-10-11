import { mergeMap } from 'rxjs/operators';
import { AuthService } from './../../../services/login.service';
import { PontuacaoService } from './../../../services/pontuacao.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-recordes',
  templateUrl: './recordes.component.html',
  styleUrls: ['./recordes.component.scss'],
})
export class RecordesComponent implements OnInit {
  pontuacaoAlunoObs: Observable<any>;
  userinfo;
  colocacao;
  medalha;

  constructor(
    private pontuacaoService: PontuacaoService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.pontuacaoAlunoObs = this.pontuacaoService.getPontuacaoAluno();
    this.authService.isLogged().pipe(
      mergeMap(user => { // Pra nao dar 2 subscribe
        this.userinfo = user;
        return this.pontuacaoService.getPontuacaoColegio();
      }),
    ).subscribe((pontuacoesColegio: Array<any>) => {
      // Pega as pontuacoes do colegio ordenados por total de pontos,do maior para o menor
      pontuacoesColegio.map((element, index) => {
        if (element.id === this.userinfo.id) {
          if (index === 0) {
            this.medalha = '../../../../assets/medalha_ouro.png';
            this.colocacao = 1;
          } else if (index === 1) {
            this.medalha = '../../../../assets/medalha_prata.png';
            this.colocacao = 2;
          } else if (index === 2) {
            this.medalha = '../../../../assets/medalha_bronze.png';
            this.colocacao = 3;
          } else {
            this.medalha = null;
            this.colocacao = index + 1;
          }
        }
      });
    });
  }
}
