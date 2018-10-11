import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-tabela-pontuacao',
  templateUrl: './tabela-pontuacao.component.html',
  styleUrls: ['./tabela-pontuacao.component.scss'],
})
export class TabelaPontuacaoComponent implements OnInit {
  @Input() dadosAsync: Observable<any>;
  @Input() total;

  constructor() { }

  ngOnInit() {
  }

}
