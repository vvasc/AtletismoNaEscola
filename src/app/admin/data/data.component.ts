import { combineLatest } from 'rxjs';
import { AuthService } from './../../services/login.service';
import { PontuacaoService } from './../../services/pontuacao.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TutorialService } from '../../services/tutorial.service';

@Component({
  selector: 'ngx-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  userinfo;
  rankingtabela;
  texto;
  @ViewChild('textohtml') textohtml: ElementRef;

  constructor(
    private pontuacaoservice: PontuacaoService,
    private authService: AuthService,
    private tutorial: TutorialService,
  ) { }

  ngOnInit() {
    combineLatest([
      this.pontuacaoservice.getPontuacaoColegio(),
      this.authService.isLogged(),
      this.tutorial.getTutorial('admin'),
    ]).subscribe(([pontuacoesColegio, user, tutorial]) => {
      this.userinfo = user;
      this.rankingtabela = pontuacoesColegio;
      this.texto = tutorial != null ? tutorial['iframe'] : '';
      this.textohtml.nativeElement.innerHTML = this.texto;
    });
  }

}
