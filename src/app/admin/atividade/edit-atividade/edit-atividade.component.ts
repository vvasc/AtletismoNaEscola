// tslint:disable-next-line
import { ConfirmationModalComponent } from './../../../@core/components/confirmation-modal/confirmation-modal.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AtividadeService } from '../../../services/atividade.service';
import { QuizSailsService } from '../../../services/quiz-sails.service';
import { NotificacaoService } from '../../../services/notificacao.service';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'ngx-edit-atividade',
  templateUrl: './edit-atividade.component.html',
  styleUrls: ['./edit-atividade.component.scss'],
})
export class EditAtividadeComponent implements OnInit {
  formAtividade: FormGroup;
  selecionado;
  quizesAsync: Observable<any>;
  atividadesObs: Observable<any>;
  querying: boolean = false;
  update;
  delete;

  constructor(
    private atividadeService: AtividadeService,
    private quizService: QuizSailsService,
    private notificacao: NotificacaoService,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.refreshAtividade();
    this.refreshQuizes();
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

  editAtividade() {
    const formval = this.formAtividade.value;
    this.querying = true;
    this.atividadeService.patchAtividade(this.selecionado.id, formval).subscribe((succ: any) => {
      this.querying = false;
      succ['tituloquiz'] = (succ.quiz) ? succ.quiz[0].titulo : '';
      this.update = succ;
      this.selecionado = null;
      this.notificacao.ngxtoaster('Sucesso!', 'Atividade editada com sucesso!', true);
      this.refreshAtividade();
      this.refreshQuizes();
      this.formAtividade.reset();
    }, err => {
      this.querying = false;
      const errmsg = (err.error.code === 'E_UNIQUE') ? 'Já existe atividade com este título!' : 'Falha na conexão!';
      this.notificacao.ngxtoaster('ERRO!', errmsg, false);
    });
  }

  select(event) {
    this.selecionado = event;
  }

  deleteAtividade() {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '40%',
      data: {
        header: 'Aviso!',
        text: 'Você realmente deseja deletar esse Atividade?',
      },
      disableClose: true,
    });
    dialogRef.afterClosed().pipe(
      tap(res => {
        if (res) {
          this.querying = true;
          this.spinner.show();
          this.atividadeService.deleteAtividade(this.selecionado.id)
          .subscribe((succ) => {
            this.querying = false;
            this.delete = this.selecionado.id;
            this.selecionado = null;
            this.SpinnerTimeout();
            this.refreshQuizes();
            this.formAtividade.reset();
            this.notificacao.ngxtoaster('Atividade', 'Atividade Deletado!', true);
          }, (err) => {
            this.querying = false;
            this.SpinnerTimeout();
            this.notificacao.ngxtoaster('Atividade', 'Algo deu errado!', false);
          });
        }
      }),
    ).subscribe();
  }

  SpinnerTimeout() {
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

}
