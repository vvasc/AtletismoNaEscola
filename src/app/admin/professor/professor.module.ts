import { ConfirmationModalComponent } from './../../@core/components/confirmation-modal/confirmation-modal.component';
import { MatDialogModule } from '@angular/material';
import { ConfirmationModalModule } from './../../@core/components/confirmation-modal/confirmation-modal.module';
import { AccountService } from './../../services/account.service';
import { FormContaComponent } from './../../@core/components/form-conta/form-conta.component';
import { ColegioService } from './../../services/colegio.service';
import { EditProfessorComponent } from './edit-professor/edit-professor.component';
import { CreateProfessorComponent } from './create-professor/create-professor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme-admin/theme.module';
import { ProfessorRoutingModule } from './professor-routing.module';
import { TableModule } from '../../@core/components/table/table.module';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { NotificacaoService } from '../../services/notificacao.service';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    ProfessorRoutingModule,
    ConfirmationModalModule,
    MatDialogModule,
    TableModule,
    NgxSpinnerModule,
  ],
  declarations: [
    CreateProfessorComponent,
    EditProfessorComponent,
    FormContaComponent,
  ],
  entryComponents: [
    ConfirmationModalComponent,
  ],
  providers: [
    ColegioService,
    NgxSpinnerService,
    NotificacaoService,
    AccountService,
  ],
})
export class ProfessorModule { }
