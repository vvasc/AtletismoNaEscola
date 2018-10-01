import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConteudoService } from '../../../../services/conteudo.service';

@Component({
  selector: 'ngx-select-conteudo',
  templateUrl: './select-conteudo.component.html',
  styleUrls: ['./select-conteudo.component.scss'],
})
export class SelectConteudoComponent implements OnInit {
  texto;
  @ViewChild('textohtml') textohtml: ElementRef;
  id: number;

  constructor(
    private conteudoService: ConteudoService,
    private activatedRoute: ActivatedRoute, // permite acessar o id em vigor na rota
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.conteudoService.getConteudo(this.id).subscribe(conteudo => {
        this.textohtml.nativeElement.innerHTML = conteudo['texto'];
      });
    });
  }

}
