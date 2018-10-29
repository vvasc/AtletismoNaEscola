import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAlunoComponent } from './edit-aluno.component';
import { ThemeModule } from '../../../@theme-admin/theme.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AccountService } from '../../../services/account.service';
import { FormAlunoModule } from '../form-aluno/form-aluno.module';
import { NotificacaoService } from '../../../services/notificacao.service';
import { TableModule } from '../../../@core/components/table/table.module';
import { ConfirmationModalModule } from '../../../@core/components/confirmation-modal/confirmation-modal.module';
import { MatDialogModule } from '@angular/material';
import { ConfirmationModalComponent } from '../../../@core/components/confirmation-modal/confirmation-modal.component';

const ALUNO_MODULES = [
  CommonModule,
  ThemeModule,
  NgxSpinnerModule,
  FormAlunoModule,
  TableModule,
  ConfirmationModalModule,
  MatDialogModule,
];

@NgModule({
  imports: [...ALUNO_MODULES],
  declarations: [
    EditAlunoComponent,
  ],
  entryComponents: [
    ConfirmationModalComponent,
  ],
  providers: [
    AccountService,
    NotificacaoService,
  ],
})
export class EditAlunoModule { }
