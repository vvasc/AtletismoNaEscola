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

@NgModule({
  imports: [
    CommonModule,
    ConteudoRoutingModule,
    ThemeModule,
    CKEditorModule,
    TableModule,
  ],
  declarations: [
    CreateConteudoComponent,
    EditConteudoComponent,
    FormConteudoComponent,
  ],
  providers: [
    QuizSailsService,
    ConteudoService,
  ],
})
export class ConteudoModule { }
