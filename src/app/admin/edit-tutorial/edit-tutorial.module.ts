import { MatDialogModule } from '@angular/material';
import { ConfirmationModalComponent } from './../../@core/components/confirmation-modal/confirmation-modal.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { CKEditorModule } from 'ng2-ckeditor';
import { ThemeModule } from '../../@theme-admin/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTutorialComponent } from './edit-tutorial.component';
import { TutorialService } from '../../services/tutorial.service';
import { EditTutorialRoutingModule } from './edit-tutorial-routing.module';
import { ConfirmationModalModule } from '../../@core/components/confirmation-modal/confirmation-modal.module';
import { InstrucoesModule } from '../conteudo/instrucoes/instrucoes.module';

@NgModule({
  imports: [
    CommonModule,
    InstrucoesModule,
    ThemeModule,
    CKEditorModule,
    NgxSpinnerModule,
    EditTutorialRoutingModule,
    ConfirmationModalModule,
    MatDialogModule,
  ],
  declarations: [
    EditTutorialComponent,
  ],
  providers: [
    TutorialService,
    NgxSpinnerService,
  ],
  entryComponents: [ConfirmationModalComponent],
})
export class EditTutorialModule { }
