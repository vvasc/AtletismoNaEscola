import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-aluno',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AlunoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
