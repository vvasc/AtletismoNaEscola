import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { QuizSailsService } from '../../../../services/quiz-sails.service';

@Component({
  selector: 'ngx-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.scss'],
})
export class ProvaComponent implements OnInit {
  catID$ = new Subject<string>();
  QuestoesAsync: Observable<any>;
  QuestaoIdAsync: Observable<any>;
  QuestaoResolver: any;

  constructor(
    private quizSailsService: QuizSailsService,
  ) { }

  ngOnInit() {
    this.QuestoesAsync = this.quizSailsService.getAllQuestoes();
  }

  resolver(event: any) {
    this.QuestaoResolver = event;
  }

}
