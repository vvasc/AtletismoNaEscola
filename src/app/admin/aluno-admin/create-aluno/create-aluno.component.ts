import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificacaoService } from '../../../services/notificacao.service';

@Component({
  selector: 'ngx-create-aluno',
  templateUrl: './create-aluno.component.html',
  styleUrls: ['./create-aluno.component.scss'],
})
export class CreateAlunoComponent implements OnInit {
  professoresAsync: Observable<any>;
  form: any = {};
  constructor(
    private accountService: AccountService,
    private notificacaoService: NotificacaoService,
  ) { }

  ngOnInit() {
    this.professoresAsync = this.accountService.getProfessores();
  }

  createAluno() {
    const aluno = this.form['aluno'].value;
    const ACCOUNT = {
      emailAddress: aluno.emailAddress,
      password: aluno.password,
      fullName: aluno.fullName,
      escola: aluno.escola,
      ano: aluno.ano,
    };
    this.accountService.createAccount(ACCOUNT).pipe(
      catchError(error => {
        this.notificacaoService.ngxtoaster('Aluno', 'Erro ao criar Aluno', false);
        return error;
      },
    )).subscribe(response => {
      this.notificacaoService.ngxtoaster('Aluno', 'Criado com sucesso', true);
    });
  }

}
