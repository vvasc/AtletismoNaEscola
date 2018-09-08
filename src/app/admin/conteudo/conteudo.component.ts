import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-conteudo',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class ConteudoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
