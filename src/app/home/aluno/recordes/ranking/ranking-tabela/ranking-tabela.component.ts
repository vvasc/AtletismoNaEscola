import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-ranking-tabela',
  templateUrl: './ranking-tabela.component.html',
  styleUrls: ['./ranking-tabela.component.scss'],
})
export class RankingTabelaComponent implements OnInit {
  @Input() dados;

  constructor() { }

  ngOnInit() {
  }

  evaluate(i) {
    return i === this.dados.colocacao ? true : false;
  }
}
