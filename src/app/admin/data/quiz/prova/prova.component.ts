import { Component, OnInit } from '@angular/core';
import { QuizService } from './../../../../services/quiz.service';
import { Subject, Observable } from 'rxjs';

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

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.QuestoesAsync = this.quizService.getAllQuestoes();
    this.QuestaoIdAsync = this.quizService.getQuestaoAsync(this.catID$);
  }

  resolver(event: any) {
    this.QuestaoResolver = event ? event[0] : null;
  }

}
