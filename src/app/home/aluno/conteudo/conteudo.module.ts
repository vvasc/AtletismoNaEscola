import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConteudoComponent } from './conteudo.component';
import { ConteudoRoutingModule } from './/conteudo-routing.module';
import { PreviewConteudoComponent } from './preview-conteudo/preview-conteudo.component';

@NgModule({
  imports: [
    CommonModule,
    ConteudoRoutingModule,
  ],
  declarations: [
    PreviewConteudoComponent,
    ConteudoComponent,
  ],
  exports: [
  ],
})
export class ConteudoModule { }
