import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuizSailsService } from '../../../services/quiz-sails.service';
import { NotificacaoService } from '../../../services/notificacao.service';
import { AtividadeService } from '../../../services/atividade.service';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProvaService } from '../../../services/prova.service';

@Component({
  selector: 'ngx-create-atividade',
  templateUrl: './create-atividade.component.html',
  styleUrls: ['./create-atividade.component.scss'],
})
export class CreateAtividadeComponent implements OnInit {
  quizesAsync: Observable<any>;
  provasAsync: Observable<any>;
  formAtividade: FormGroup;
  querying: boolean = false;

  constructor(
    private atividadeService: AtividadeService,
    private quizService: QuizSailsService,
    private provaService: ProvaService,
    private notificacao: NotificacaoService,
  ) { }

  ngOnInit() {
    this.carregaQuizes();
    this.carregaProvas();
  }

  carregaQuizes() {
    this.quizesAsync = this.quizService.getQuizesLivresAtividade().pipe(catchError((error: any) => {
      this.notificacao.ngxtoaster('Quizes', 'Não foi possível carregar os quizes! Recarregue a página!', false);
      return error;
    }));
  }

  carregaProvas() {
    this.provasAsync = this.provaService.getAllProvas().pipe(catchError((error: any) => {
      this.notificacao.ngxtoaster('Quizes', 'Não foi possível carregar os quizes! Recarregue a página!', false);
      return error;
    }));
  }

  getForm(form) {
    this.formAtividade = form;
  }

  criarAtividade() {
    const formval = this.formAtividade.value;

    this.querying = true;
    this.atividadeService.createAtividade(formval).subscribe(res => {
      this.querying = false;
      this.notificacao.ngxtoaster('Atividade', 'Criado com Sucesso!', true);
      this.carregaQuizes(); // Renova a lista dos quizes livres
      this.formAtividade.reset();
    }, err => {
      this.querying = false;
      const erromsg = (err.error.code === 'E_UNIQUE') ? 'Já existe atividade com este título!' : 'Erro na conexão!';
      this.notificacao.ngxtoaster('Criação Falhou!', erromsg, false);
    });
  }

}
