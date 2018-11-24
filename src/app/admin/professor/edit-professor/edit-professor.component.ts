// tslint:disable-next-line
import { ConfirmationModalComponent } from './../../../@core/components/confirmation-modal/confirmation-modal.component';
import { MatDialog } from '@angular/material';
import { map, tap } from 'rxjs/operators';
import { NotificacaoService } from './../../../services/notificacao.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { AuthService } from '../../../services/login.service';
import { ColegioService } from '../../../services/colegio.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'ngx-edit-professor',
  templateUrl: './edit-professor.component.html',
  styleUrls: ['./edit-professor.component.scss'],
})
export class EditProfessorComponent implements OnInit {
  professoresAsync: Observable<any>;
  escolasAsync: Observable<any>;
  selectedProfessor;
  formProfessor;
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
    this.professoresAsync = this.accountservice.getProfessores().pipe(
      map((contas: any) => {
        contas.map(conta => {
          conta.nomeEscola = conta.escola.nome;
        });
        return contas;
      }),
    );
  }

  selectProfessor(event) {
    this.selectedProfessor = event;
  }

  resolveForm(event) {
    this.formProfessor = event;
  }

  selectEscola(event) {
    this.selectedEscola = event;
  }

  scroll(el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  editProfessor() {
    const formval = this.formProfessor.value;
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
    this.accountservice.patchAccount(this.selectedProfessor.id, ACCOUNT).subscribe((success: any) => {
      this.querying = false;
      success['nomeEscola'] = success.escola.nome;
      this.update = success;
      this.spinnerTimeout();
      this.notificacao.ngxtoaster('Professor', 'Editado com Sucesso!', true);
      this.formProfessor.reset();
      this.selectedEscola = null;
      this.selectedProfessor = null;
    }, err => {
      this.querying = false;
      this.spinnerTimeout();
      const erromsg = (err.error.code === 'E_UNIQUE') ? 'Já existe Professor com este email!' : 'Erro!';
      this.notificacao.ngxtoaster('Edição Falhou!', erromsg, false);
    });
  }

  deleteProfessor() {
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
          this.spinner.show();
          this.accountservice.deleteAccount(this.selectedProfessor.id)
          .subscribe((succ) => {
            this.delete = this.selectedProfessor.id;
            this.selectedProfessor = null;
            this.spinnerTimeout();
            this.notificacao.ngxtoaster('Professor', 'Deletado com Sucesso!', true);
          }, (err) => {
            this.spinnerTimeout();
            this.notificacao.ngxtoaster('Professor', 'Erro na Deleção!', false);
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
