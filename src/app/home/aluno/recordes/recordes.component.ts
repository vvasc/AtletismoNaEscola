import { PontuacaoService } from './../../../services/pontuacao.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-recordes',
  templateUrl: './recordes.component.html',
  styleUrls: ['./recordes.component.scss'],
})
export class RecordesComponent implements OnInit {
  pontuacao: Observable<any>;

  constructor(private pontuacaoService: PontuacaoService) { }

  ngOnInit() {
    this.pontuacao = this.pontuacaoService.getAllPontuacao();
  }

}
