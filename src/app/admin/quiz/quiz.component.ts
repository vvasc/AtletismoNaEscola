import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-quiz',
  template: `
    <router-outlet></router-outlet>
    `,
})
export class QuizComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
 }
