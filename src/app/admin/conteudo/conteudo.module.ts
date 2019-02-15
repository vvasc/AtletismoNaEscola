import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { MatDialogModule } from '@angular/material';
import { ConfirmationModalComponent } from './../../@core/components/confirmation-modal/confirmation-modal.component';
import { ConfirmationModalModule } from './../../@core/components/confirmation-modal/confirmation-modal.module';
import { TableModule } from './../../@core/components/table/table.module';
import { ConteudoService } from './../../services/conteudo.service';
import { QuizSailsService } from './../../services/quiz-sails.service';
import { ThemeModule } from './../../@theme-admin/theme.module';
import { EditConteudoComponent } from './edit-conteudo/edit-conteudo.component';
import { CreateConteudoComponent } from './create-conteudo/create-conteudo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConteudoRoutingModule } from './conteudo-routing.module';
import { FormConteudoComponent } from './form-conteudo/form-conteudo.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { InstrucoesModule } from './instrucoes/instrucoes.module';

@NgModule({
  imports: [
    CommonModule,
    InstrucoesModule,
    ConteudoRoutingModule,
    ThemeModule,
    CKEditorModule,
    TableModule,
    ConfirmationModalModule,
    MatDialogModule,
    NgxSpinnerModule,
  ],
  declarations: [
    CreateConteudoComponent,
    EditConteudoComponent,
    FormConteudoComponent,
  ],
  entryComponents: [
    ConfirmationModalComponent,
  ],
  providers: [
    QuizSailsService,
    ConteudoService,
    NgxSpinnerService,
  ],
})
export class ConteudoModule { }
