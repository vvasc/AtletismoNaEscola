import { ConfirmationModalComponent } from './../../@core/components/confirmation-modal/confirmation-modal.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { MatDialogModule } from '@angular/material';
import { ConfirmationModalModule } from './../../@core/components/confirmation-modal/confirmation-modal.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormPontuacaoComponent } from './form-pontuacao/form-pontuacao.component';
import { PontuacaoRoutingModule } from './pontuacao-routing.module';
import { CreatePontuacaoComponent } from './create-pontuacao/create-pontuacao.component';
import { EditPontuacaoComponent } from './edit-pontuacao/edit-pontuacao.component';
import { AccountService } from '../../services/account.service';
import { TableModule } from '../../@core/components/table/table.module';
import { ThemeModule } from '../../@theme-admin/theme.module';
import { AtividadeService } from '../../services/atividade.service';
import { PontuacaoService } from '../../services/pontuacao.service';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    PontuacaoRoutingModule,
    TableModule,
    ConfirmationModalModule,
    MatDialogModule,
    NgxSpinnerModule,
  ],
  declarations: [
    CreatePontuacaoComponent,
    EditPontuacaoComponent,
    FormPontuacaoComponent,
  ],
  entryComponents: [
    ConfirmationModalComponent,
  ],
  providers: [
    AccountService,
    AtividadeService,
    PontuacaoService,
    NgxSpinnerService,
  ],
})
export class PontuacaoModule { }
