import { ConfirmationModalModule } from './../../@core/components/confirmation-modal/confirmation-modal.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { TableModule } from '../../@core/components/table/table.module';
import { ConfirmationModalComponent } from './../../@core/components/confirmation-modal/confirmation-modal.component';
import { ThemeModule } from './../../@theme/theme.module';
import { AtividadeRoutingModule } from './atividade-routing.module';
import { CreateAtividadeComponent } from './create-atividade/create-atividade.component';
import { EditAtividadeComponent } from './edit-atividade/edit-atividade.component';
import { FormAtividadeComponent } from './form-atividade/form-atividade.component';
import { QuizSailsService } from '../../services/quiz-sails.service';
import { AtividadeService } from '../../services/atividade.service';

@NgModule({
  imports: [
    CommonModule,
    AtividadeRoutingModule,
    ThemeModule,
    TableModule,
    ConfirmationModalModule,
    MatDialogModule,
    NgxSpinnerModule,
  ],
  declarations: [
    CreateAtividadeComponent,
    EditAtividadeComponent,
    FormAtividadeComponent,
  ],
  entryComponents: [
    ConfirmationModalComponent,
  ],
  providers: [
    QuizSailsService,
    AtividadeService,
    NgxSpinnerService,
  ],
})
export class AtividadeModule { }
