import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  isCollapsed: boolean = true;
  isCollapsedProva: boolean = false;
  constructor() { }

  ngOnInit() {

  }

}
