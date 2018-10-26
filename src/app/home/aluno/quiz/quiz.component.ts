import { Component, OnInit } from '@angular/core';
import { QuizSailsService } from '../../../services/quiz-sails.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  quizesAsync: Observable<any>;
  constructor(private quizService: QuizSailsService) { }

  ngOnInit() {
    this.quizesAsync = this.quizService.quizNaoRespondido();
  }

  resolverResposta(respostas: any) {
  ngOnInit() {
  }

}
