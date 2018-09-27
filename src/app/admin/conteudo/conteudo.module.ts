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
  ],
  declarations: [
    CreateConteudoComponent,
    EditConteudoComponent,
    FormConteudoComponent,
  ],
})
export class ConteudoModule { }
