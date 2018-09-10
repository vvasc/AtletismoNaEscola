import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-tabela-pontuacao',
  templateUrl: './tabela-pontuacao.component.html',
  styleUrls: ['./tabela-pontuacao.component.scss'],
})
export class TabelaPontuacaoComponent implements OnInit {
  @Input() dados;

  constructor() { }

  ngOnInit() {
  }

}
