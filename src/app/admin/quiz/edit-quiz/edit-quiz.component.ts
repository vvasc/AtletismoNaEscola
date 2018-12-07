import { QuizSailsService } from './../../../services/quiz-sails.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificacaoService } from '../../../services/notificacao.service';

@Component({
  selector: 'ngx-edit-quiz',
  templateUrl: 'edit-quiz.component.html',
})

export class EditQuizComponent implements OnInit {
  quizAsync: Observable<any>;
  provaSelected: any;
  update: any = [];
  remove: number|string = null;

  constructor(
    private notificacao: NotificacaoService,
    private quizService: QuizSailsService,
  ) { }

  ngOnInit() {
    this.quizAsync = this.quizService.getAllQuiz();
  }

  selectProva(event: any) {
    this.provaSelected = event;
  }

  deleteQuiz(event: any) {
    this.quizService.deleteQuiz(event).subscribe(success => {
      this.notificacao.ngxtoaster('Sucesso!', 'Quiz deletado com Sucesso!', true);
      this.remove = event;
    }, err => {
      this.notificacao.ngxtoaster('Erro!', 'Quiz não foi deletado!', false);
    });
  }

  resolveQuiz(event: any) {
    this.quizService.patchQuiz(event.id, event).subscribe(response => {
      this.notificacao.ngxtoaster('Sucesso!', 'Quiz editado com Sucesso!', true);
      this.update = response;
    }, err => {
      const errmsg = (err.error.code === 'E_UNIQUE') ? 'Já existe Quiz com esse título!' : 'Falha na edição/conexão!';
      this.notificacao.ngxtoaster('Erro!', errmsg, false);
    });
    this.provaSelected = null;
  }

  scroll(el) {
    el.scrollIntoView({ behavior: 'smooth'});
  }
}
