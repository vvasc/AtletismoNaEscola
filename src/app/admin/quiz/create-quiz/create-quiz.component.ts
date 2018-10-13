import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss'],
})
export class CreateQuizComponent implements OnInit {
  isCollapsed: boolean = false;
  isCollapsedProva: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  collapse() {
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsedProva = !this.isCollapsedProva;
  }

}
