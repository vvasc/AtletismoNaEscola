import { QuizSailsService } from './../../../services/quiz-sails.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-edit-quiz',
  templateUrl: 'edit-quiz.component.html',
})

export class EditQuizComponent implements OnInit {
  quizAsync: Observable<any>;
  provaSelected: any;

  constructor(private quizService: QuizSailsService) { }

  ngOnInit() {
    this.quizAsync = this.quizService.getAllQuiz();
  }

  selectProva(event: any) {
    this.provaSelected = event;
  }
}
