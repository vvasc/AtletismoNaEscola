import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { catchError } from 'rxjs/operators';
import { NotificacaoService } from '../../../services/notificacao.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'ngx-create-aluno',
  templateUrl: './create-aluno.component.html',
  styleUrls: ['./create-aluno.component.scss'],
})
export class CreateAlunoComponent implements OnInit {
  formAluno: any = {};
  constructor(
    private accountService: AccountService,
    private notificacaoService: NotificacaoService,
  ) { }

  ngOnInit() {
  }

  createAluno() {
    const aluno = this.formAluno.value;
    const ACCOUNT = {
      emailAddress: aluno.emailAddress,
      password: aluno.password,
      fullName: aluno.fullName,
      escola: aluno.escola,
      ano: aluno.ano,
    };
    this.accountService.createAccount(ACCOUNT).pipe(
      catchError(err => {
        let msg;
        switch (err.error.code) {
          case 'E_UNIQUE':
            msg = 'Já existe Aluno com este Email!';
            break;
          case 'E_INVALID_NEW_RECORD':
            msg = 'O email fornecido não é válido!';
            break;
          default:
            msg = 'Erro ao criar Aluno';
            break;
        }
        this.notificacaoService.ngxtoaster('Aluno', msg, false);
        return throwError(err);
      },
    )).subscribe(response => {
      this.notificacaoService.ngxtoaster('Aluno', 'Criado com sucesso', true);
      const temp = aluno.escola;
      this.formAluno.reset();
      this.formAluno.controls['escola'].setValue(temp);
    });
  }

}
