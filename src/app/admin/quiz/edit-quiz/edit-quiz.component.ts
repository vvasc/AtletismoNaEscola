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
  update: any = [];
  remove: number|string = null;

  constructor(private quizService: QuizSailsService) { }

  ngOnInit() {
    this.quizAsync = this.quizService.getAllQuiz();
  }

  selectProva(event: any) {
    this.provaSelected = event;
  }

  deleteQuiz(event: any) {
    this.quizService.deleteQuiz(event).subscribe();
    this.remove = event;
  }

  resolveQuiz(event: any) {
    this.quizService.patchQuiz(event.id, event).subscribe(response => {
      this.update = response;
    });
  }
}
