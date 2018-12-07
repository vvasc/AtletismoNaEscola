import { ConfirmationModalComponent } from '../../@core/components/confirmation-modal/confirmation-modal.component';
import { MatDialogModule } from '@angular/material';
import { ConfirmationModalModule } from '../../@core/components/confirmation-modal/confirmation-modal.module';
import { AccountService } from '../../services/account.service';
import { FormContaComponent } from '../../@core/components/form-conta/form-conta.component';
import { ColegioService } from '../../services/colegio.service';
import { EditDiretorComponent } from './edit-diretor/edit-diretor.component';
import { CreateDiretorComponent } from './create-diretor/create-diretor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme-admin/theme.module';
import { DiretorRoutingModule } from './diretor-routing.module';
import { TableModule } from '../../@core/components/table/table.module';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { NotificacaoService } from '../../services/notificacao.service';
import { FormContaModule } from '../../@core/components/form-conta/form-conta.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    DiretorRoutingModule,
    ConfirmationModalModule,
    MatDialogModule,
    TableModule,
    NgxSpinnerModule,
    FormContaModule,
  ],
  declarations: [
    CreateDiretorComponent,
    EditDiretorComponent,
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
export class DiretorModule { }
