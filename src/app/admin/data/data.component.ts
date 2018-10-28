import { combineLatest } from 'rxjs';
import { AuthService } from './../../services/login.service';
import { PontuacaoService } from './../../services/pontuacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  userinfo;
  rankingtabela;

  constructor(
    private pontuacaoservice: PontuacaoService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    combineLatest([this.pontuacaoservice.getPontuacaoColegio(), this.authService.isLogged()])
      .subscribe(([pontuacoesColegio, user]) => {
        this.userinfo = user;
        this.rankingtabela = pontuacoesColegio;
      });
  }

}
