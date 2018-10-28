import { AuthService } from './../../../services/login.service';
import { PontuacaoService } from './../../../services/pontuacao.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'ngx-recordes',
  templateUrl: './recordes.component.html',
  styleUrls: ['./recordes.component.scss'],
})
export class RecordesComponent implements OnInit {
  pontuacaoAluno;
  userinfo;
  colocacao;
  medalha;
  rankingtabela;

  constructor(
    private pontuacaoService: PontuacaoService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    combineLatest([
      this.pontuacaoService.getPontuacaoAluno(),
      this.authService.isLogged(),
      this.pontuacaoService.getPontuacaoColegio(),
    ]).subscribe(([pontuacoesAluno, user, pontuacoesColegio]) => {
      this.userinfo = user;
      if (user.role === 'aluno') {
        this.pontuacaoAluno = pontuacoesAluno;
        // Pega as pontuacoes do colegio ordenados por total de pontos,do maior para o menor
        pontuacoesColegio.map((element, index) => {
          if (element.id === user.id) {
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
      } else
        this.rankingtabela = pontuacoesColegio;
    });
  }
}
