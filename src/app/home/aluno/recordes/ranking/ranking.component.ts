import { PontuacaoService } from './../../../../services/pontuacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent implements OnInit {
  ranking;


  constructor(private pontuacaoservice: PontuacaoService) { }

  ngOnInit() {
    this.ranking = this.pontuacaoservice.getPontuacaoColegio();
  }

}
