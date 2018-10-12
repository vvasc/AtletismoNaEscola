import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AtividadeService } from '../../../services/atividade.service';
import { QuizSailsService } from '../../../services/quiz-sails.service';
import { ProvaService } from '../../../services/prova.service';
import { NotificacaoService } from '../../../services/notificacao.service';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'ngx-edit-atividade',
  templateUrl: './edit-atividade.component.html',
  styleUrls: ['./edit-atividade.component.scss'],
})
export class EditAtividadeComponent implements OnInit {
  formAtividade: FormGroup;
  selecionado;
  quizesAsync: Observable<any>;
  provasAsync: Observable<any>;
  atividadesObs: Observable<any>;
  querying: boolean = false;

  constructor(
    private atividadeService: AtividadeService,
    private quizService: QuizSailsService,
    private provaService: ProvaService,
    private notificacao: NotificacaoService,
  ) { }

  ngOnInit() {
    this.refreshAtividade();
    this.refreshQuizes();
    this.refreshProvas();
  }

  getForm(form) {
    this.formAtividade = form;
  }

  refreshAtividade() {
    this.atividadesObs = this.atividadeService.getAllAtividades().pipe(
      catchError(err => {
        this.notificacao.ngxtoaster('ERRO!', 'Falha na conexão!', false);
        return err;
      }),
      map((atividades: any) => {
        atividades.forEach(atividade => {
          // Refatorando objeto pra ser usado na table
          (atividade.quiz) ? atividade['tituloquiz'] = atividade.quiz[0].titulo : null;
          (atividade.provaPratica) ? atividade['titulopratica'] = atividade.provaPratica[0].titulo : null;
        });
        return atividades;
      }),
    );
  }

  refreshQuizes() {
    this.quizesAsync = this.quizService.getQuizesLivresAtividade().pipe(catchError((error: any) => {
      this.notificacao.ngxtoaster('Quizes', 'Não foi possível carregar os quizes! Recarregue a página!', false);
      return error;
    }));
  }

  refreshProvas() {
    this.provasAsync = this.provaService.getAllProvas().pipe(catchError((error: any) => {
      this.notificacao.ngxtoaster('Provas', 'Não foi possível carregar as provas! Recarregue a página!', false);
      return error;
    }));
  }

  editAtividade() {
    const formval = this.formAtividade.value;
    (formval.quiz === '') ? formval.quiz = null : null; // se não houver quiz selecionado
    (formval.provaPratica === '') ? formval.provaPratica = null : null; // se não houver prova selecionada
    this.atividadeService.patchAtividade(this.selecionado.id, formval).subscribe(succ => {
      this.notificacao.ngxtoaster('Sucesso!', 'Atividade editada com sucesso!', true);
      this.refreshAtividade();
      this.refreshQuizes();
      this.formAtividade.reset();
    }, err => {
      const errmsg = (err.error.code === 'E_UNIQUE') ? 'Já existe atividade com este título!' : 'Falha na conexão!';
      this.notificacao.ngxtoaster('ERRO!', errmsg, false);
    });
  }

  select(event) {
    this.selecionado = event;
  }

}
