// tslint:disable-next-line
import { ConfirmationModalComponent } from '../../../@core/components/confirmation-modal/confirmation-modal.component';
import { MatDialog } from '@angular/material';
import { map, tap } from 'rxjs/operators';
import { NotificacaoService } from '../../../services/notificacao.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { AuthService } from '../../../services/login.service';
import { ColegioService } from '../../../services/colegio.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'ngx-edit-diretor',
  templateUrl: './edit-diretor.component.html',
  styleUrls: ['./edit-diretor.component.scss'],
})
export class EditDiretorComponent implements OnInit {
  diretoresAsync: Observable<any>;
  escolasAsync: Observable<any>;
  selectedDiretor;
  formDiretor;
  user;
  selectedEscola;
  querying = false;
  update;
  delete;

  constructor(
    private accountservice: AccountService,
    private authservice: AuthService,
    private colegioService: ColegioService,
    private spinner: NgxSpinnerService,
    private notificacao: NotificacaoService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.authservice.isLogged().subscribe(user => {
      this.user = user;
      if (user.role === 'superadmin') {
        this.escolasAsync = this.colegioService.getAllColegio();
      } else {
        const arr = [];
        arr.push(user.escola);
        this.escolasAsync = of(arr);
      }
    });
    this.diretoresAsync = this.accountservice.getDiretores().pipe(
      map((contas: any) => {
        contas.map(conta => {
          conta.nomeEscola = conta.escola.nome;
        });
        return contas;
      }),
    );
  }

  selectDiretor(event) {
    this.selectedDiretor = event;
  }

  resolveForm(event) {
    this.formDiretor = event;
  }

  selectEscola(event) {
    this.selectedEscola = event;
  }

  scroll(el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  editDiretor() {
    const formval = this.formDiretor.value;
    const ACCOUNT = {
      emailAddress: formval.emailAddress,
      fullName: formval.fullName,
      escola: formval.escola,
      ano: formval.ano,
    };
    if (formval.password !== null && formval.password !== '') // Caso ele tiver editado a senha
      ACCOUNT['password'] = formval.password;

    this.querying = true;
    this.spinner.show();
    this.accountservice.patchAccount(this.selectedDiretor.id, ACCOUNT).subscribe((success: any) => {
      this.querying = false;
      success['nomeEscola'] = success.escola.nome;
      this.update = success;
      this.spinnerTimeout();
      this.notificacao.ngxtoaster('Diretor', 'Editado com Sucesso!', true);
      this.formDiretor.reset();
      this.selectedEscola = null;
      this.selectedDiretor = null;
    }, err => {
      this.querying = false;
      this.spinnerTimeout();
      const erromsg = (err.error.code === 'E_UNIQUE') ? 'Já existe Diretor com este email!' : 'Erro!';
      this.notificacao.ngxtoaster('Edição Falhou!', erromsg, false);
    });
  }

  deleteDiretor() {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '40%',
      data: {
        header: 'Aviso!',
        text: 'Você realmente deseja deletar esse Diretor?',
        warning: false,
      },
      disableClose: true,
    });
    dialogRef.afterClosed().pipe(
      tap(res => {
        if (res) {
          this.spinner.show();
          this.accountservice.deleteAccount(this.selectedDiretor.id)
          .subscribe((succ) => {
            this.delete = this.selectedDiretor.id;
            this.selectedDiretor = null;
            this.spinnerTimeout();
            this.notificacao.ngxtoaster('Diretor', 'Deletado com Sucesso!', true);
          }, (err) => {
            this.spinnerTimeout();
            this.notificacao.ngxtoaster('Diretor', 'Erro na Deleção!', false);
          });
        }
      }),
    ).subscribe();
  }

  spinnerTimeout() {
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

}
