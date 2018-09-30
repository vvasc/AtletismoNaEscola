import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ngx-tabela-pontuacao',
  templateUrl: './tabela-pontuacao.component.html',
  styleUrls: ['./tabela-pontuacao.component.scss'],
})
export class TabelaPontuacaoComponent implements OnInit {
  @Input() dadosAsync: Observable<any>;
  total: number;
  constructor() { }

  ngOnInit() {
    this.dadosAsync.pipe(
      map(dados => {
        this.total = dados.reduce((total, current) => {
          return total + current.pontuacaoAula + current.pontuacaoQuiz;
        }, 0);
        return dados;
      }),
    );
  }

}
