import { AccountService } from './../../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { NotificacaoService } from '../../../services/notificacao.service';
import { ConfirmationModalComponent } from '../../../@core/components/confirmation-modal/confirmation-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'ngx-edit-aluno',
  templateUrl: './edit-aluno.component.html',
  styleUrls: ['./edit-aluno.component.scss'],
})
export class EditAlunoComponent implements OnInit {
  form: any = {};
  resolvedAluno: any = [];
  alunosAsync: Observable<any>;
  professoresAsync: Observable<any>;
  update: any = [];
  delete: any = [];

  constructor(
    private accountService: AccountService,
    private notificacaoService: NotificacaoService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.professoresAsync = this.accountService.getProfessores();
    this.alunosAsync = this.accountService.getAlunos().pipe(
      map((contas: any) => {
        contas.map(conta => {
          conta.nomeEscola = conta.escola.nome;
          conta.professor = conta.escola.id;
        });
        return contas;
      }),
    );
  }

  editAluno() {
    const aluno = this.form['aluno'].value;
    const ACCOUNT = {
      emailAddress: aluno.emailAddress,
      fullName: aluno.fullName,
      escola: aluno.professor,
      ano: aluno.ano,
    };
    if ('password' in aluno && aluno.password !== '' && aluno.password !== null) {
      ACCOUNT['password'] = aluno.password;
    }
    this.accountService.patchAccount(this.resolvedAluno.id, ACCOUNT).pipe(
      catchError(error => {
        this.notificacaoService.ngxtoaster('Aluno', 'Erro!', false);
        return throwError(error);
      })).subscribe((success: any) => {
      success['nomeEscola'] = success.escola.nome;
      this.update = success;
      this.notificacaoService.ngxtoaster('Aluno', 'Editado com Sucesso!', true);
      this.form['aluno'].reset();
    });
  }

  deleteAluno() {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '40%',
      data: {
        header: 'Aviso!',
        text: 'Você realmente deseja deletar esse Professor?',
        warning: false,
      },
      disableClose: true,
    });
    dialogRef.afterClosed().pipe(
      tap(res => {
        if (res) {
          this.accountService.deleteAccount(this.resolvedAluno.id).pipe(
            catchError(error => {
              this.notificacaoService.ngxtoaster('Aluno', 'Erro na Deleção!', false);
              return throwError(error);
            })).subscribe((succ) => {
            this.delete = this.resolvedAluno.id;
            this.resolvedAluno = null;
            this.form['aluno'].reset();
            this.notificacaoService.ngxtoaster('Aluno', 'Deletado com Sucesso!', true);
          });
        }
      }),
    ).subscribe();
  }

}
