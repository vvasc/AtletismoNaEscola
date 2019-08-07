import { switchMap, filter } from 'rxjs/operators';
import { ConfirmationModalComponent } from './../../@core/components/confirmation-modal/confirmation-modal.component';
import { MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificacaoService } from '../../services/notificacao.service';
import { TutorialService } from '../../services/tutorial.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'ngx-edit-tutorial',
  templateUrl: './edit-tutorial.component.html',
  styleUrls: ['./edit-tutorial.component.scss'],
})
export class EditTutorialComponent implements OnInit {
  tutorialform: FormGroup;
  admintutorialform: FormGroup;
  querying = false;

  constructor(
    private fb: FormBuilder,
    private notificacao: NotificacaoService,
    private spinner: NgxSpinnerService,
    private tutorialService: TutorialService,
    private dialog: MatDialog,
  ) {
    this.tutorialform = this.fb.group({
      iframe: ['', Validators.required],
    });
    this.admintutorialform = this.fb.group({
      iframe: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.ShowSpinner();
    combineLatest([this.tutorialService.getTutorial(), this.tutorialService.getTutorial('admin')])
    .subscribe(([aluno, admin]) => {
      if (aluno)
        this.tutorialform.patchValue(aluno);
      if (admin)
        this.admintutorialform.patchValue(admin);
      this.HideSpinner();
    }, err => {
      this.notificacao.ngxtoaster('Erro!', 'Erro ao carregar Tutorial! Recarregue a página!', false);
    });
  }

  editTutorial(nome = 'aluno') {
    this.ShowSpinner();
    const formval = (nome === 'aluno') ? this.tutorialform.value : this.admintutorialform.value;
    this.tutorialService.editTutorial(formval, nome).subscribe(success => {
      this.HideSpinner();
      this.notificacao.ngxtoaster('Tutorial', `Tutorial do ${nome} editado com Sucesso!`, true);
    }, (err) => {
      this.HideSpinner();
      this.notificacao.ngxtoaster('Tutorial', 'Erro ao Editar!', false);
    });
  }

  deleteTutorial(nome = 'aluno') {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '40%',
      data: {
        header: 'Aviso!',
        text: `Você realmente deseja deletar o tutorial do ${nome}?`,
        warning: false,
      },
      disableClose: true,
    });
    dialogRef.afterClosed().pipe(
      filter(res => res),
      switchMap(() => {
        this.ShowSpinner();
        return this.tutorialService.deleteTutorial(nome);
      }),
    ).subscribe((succ) => {
      this.HideSpinner();
      if (nome === 'aluno')
        this.tutorialform.reset();
      else
        this.admintutorialform.reset();
      this.notificacao.ngxtoaster('Tutorial', `Tutorial do ${nome} deletado!`, true);
    }, (err) => {
      this.HideSpinner();
      this.notificacao.ngxtoaster('Tutorial', 'Erro ao Deletar!', false);
    });
  }

  HideSpinner() {
    this.querying = false;
    this.SpinnerTimeout();
  }

  ShowSpinner() {
    this.querying = true;
    this.spinner.show();
  }

  SpinnerTimeout() {
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

}
