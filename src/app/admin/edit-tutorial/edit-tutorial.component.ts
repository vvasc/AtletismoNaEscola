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
  ) {
    this.tutorialform = this.fb.group({
      iframe: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.querying = true;
    this.spinner.show();
    this.tutorialService.getTutorial().subscribe(tut => {
      this.querying = false;
      this.SpinnerTimeout();
      // Se tiver tutorial
      if (tut !== null)
        this.tutorialform.patchValue(tut);
    }, err => {
      this.notificacao.ngxtoaster('Erro!', 'Erro ao carregar Tutorial! Recarregue a página!', false);
    });
  }

  editTutorial() {
    this.querying = true;
    this.spinner.show();
    const formval = this.tutorialform.value;
    this.tutorialService.editTutorial(formval).subscribe(success => {
      this.querying = false;
      this.SpinnerTimeout();
      this.notificacao.ngxtoaster('Tutorial', 'Tutorial Editado com Sucesso!', true);
    }, (err) => {
      this.querying = false;
      this.SpinnerTimeout();
      this.notificacao.ngxtoaster('Tutorial', 'Erro ao Editar!', false);
    });
  }

  SpinnerTimeout() {
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

}
