import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ConteudoService } from '../../../services/conteudo.service';

@Component({
  selector: 'ngx-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.scss'],
})
export class ConteudoComponent implements OnInit {
  ConteudoAsync: Observable<any>;
  ConteudoResolver: any;

  constructor(
    private conteudoService: ConteudoService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.ConteudoAsync = this.conteudoService.getConteudo();
  }

  resolver(event: any) {
    this.ConteudoResolver = event;
    this.router.navigate([`home/aluno/conteudo/${this.ConteudoResolver.id}`]);
  }

}
