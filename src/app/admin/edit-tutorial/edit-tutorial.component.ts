import { switchMap, filter, tap } from 'rxjs/operators';
import { ConfirmationModalComponent } from './../../@core/components/confirmation-modal/confirmation-modal.component';
import { MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificacaoService } from '../../services/notificacao.service';
import { TutorialService } from '../../services/tutorial.service';

@Component({
  selector: 'ngx-edit-tutorial',
  templateUrl: './edit-tutorial.component.html',
  styleUrls: ['./edit-tutorial.component.scss'],
})
export class EditTutorialComponent implements OnInit {
  tutorialform: FormGroup;
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
  }

  ngOnInit() {
    this.ShowSpinner();
    this.tutorialService.getTutorial().pipe(
      tap((tut) => {
        // Se tiver tutorial
        if (tut !== null)
          this.tutorialform.patchValue(tut);
      }),
    ).subscribe(tut => {
      this.HideSpinner();
    }, err => {
      this.notificacao.ngxtoaster('Erro!', 'Erro ao carregar Tutorial! Recarregue a página!', false);
    });
  }

  editTutorial() {
    this.ShowSpinner();
    const formval = this.tutorialform.value;
    this.tutorialService.editTutorial(formval).subscribe(success => {
      this.HideSpinner();
      this.notificacao.ngxtoaster('Tutorial', 'Tutorial Editado com Sucesso!', true);
    }, (err) => {
      this.HideSpinner();
      this.notificacao.ngxtoaster('Tutorial', 'Erro ao Editar!', false);
    });
  }

  deleteTutorial() {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '40%',
      data: {
        header: 'Aviso!',
        text: 'Você realmente deseja deletar o tutorial?',
        warning: false,
      },
      disableClose: true,
    });
    dialogRef.afterClosed().pipe(
      filter(res => res),
      switchMap(() => {
        this.ShowSpinner();
        return this.tutorialService.deleteTutorial();
      }),
    ).subscribe((succ) => {
      this.HideSpinner();
      this.tutorialform.reset();
      this.notificacao.ngxtoaster('Tutorial', 'Tutorial Deletado!', true);
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
