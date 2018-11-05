import { AuthService } from './../../../services/login.service';
import { PontuacaoService } from './../../../services/pontuacao.service';
import { Component, OnInit } from '@angular/core';
import { QuizSailsService } from '../../../services/quiz-sails.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { NotificacaoService } from '../../../services/notificacao.service';

@Component({
  selector: 'ngx-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  quizesAsync: Observable<any>;
  querying = false;

  constructor(
    private quizService: QuizSailsService,
    private pontuacaoService: PontuacaoService,
    private route: Router,
    private notificacao: NotificacaoService,
    private Auth: AuthService,
  ) { }

  ngOnInit() {
    this.quizesAsync = this.quizService.quizNaoRespondido();
  }

  resolverResposta(respostas: any) {
    if (this.querying) // Caso o aluno apertar o botao enquanto já está fazendo a requisição
      return;
    this.querying = true;
    this.pontuacaoService.createPontuacaoQuiz(respostas).pipe(catchError((error: any) => {
      this.notificacao.ngxtoaster('Quiz', 'Erro ao responder o quiz', false);
      this.querying = false;
      return error;
    })).subscribe((response) => {
      if (response === 'ok') {
        this.notificacao.ngxtoaster('Quiz', 'Quiz Respondido', true);
        this.Auth.refresh().subscribe(succ => {
          this.route.navigate(['/home/aluno/recordes/ranking']);
        });
      } else
        this.route.navigate(['/home/aluno/recordes/ranking']);
      this.querying = false;
    });
  }

}
