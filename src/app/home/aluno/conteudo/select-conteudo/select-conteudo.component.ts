import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { ConteudoService } from '../../../../services/conteudo.service';

@Component({
  selector: 'ngx-select-conteudo',
  templateUrl: './select-conteudo.component.html',
  styleUrls: ['./select-conteudo.component.scss'],
})
export class SelectConteudoComponent implements OnInit {
  text: string = '';
  id: number;

  constructor(
    private conteudoService: ConteudoService,
    private activatedRoute: ActivatedRoute, // permite acessar o id em vigor na rota
    protected sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.conteudoService.getConteudo(this.id).subscribe(conteudo => {
        this.text = conteudo['texto'];
      });
    });
  }

}
