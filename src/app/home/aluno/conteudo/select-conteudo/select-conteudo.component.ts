import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-select-conteudo',
  templateUrl: './select-conteudo.component.html',
  styleUrls: ['./select-conteudo.component.scss']
})
export class SelectConteudoComponent implements OnInit {
  @Input() conteudo:any = [];

  constructor() { }

  /*
  ngOnChanges(changes: SimpleChanges) {
    // tslint:disable-next-line:max-line-length
    if ('conteudo') {
      this.conteudo ? console.log(this.conteudo.texto): null;
    }
  }
  */
  ngOnInit() {
    
  }

}
