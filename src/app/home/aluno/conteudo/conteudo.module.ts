import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableModule } from '../../../@core/components/table/table.module';
import { ConteudoService } from '../../../services/conteudo.service';
import { ConteudoRoutingModule } from './/conteudo-routing.module';
import { ConteudoComponent } from './conteudo.component';
import { SelectConteudoComponent } from './select-conteudo/select-conteudo.component';
import { PreviewConteudoComponent } from './preview-conteudo/preview-conteudo.component';

@NgModule({
  imports: [
    CommonModule,
    ConteudoRoutingModule,
    TableModule,
  ],
  declarations: [
    PreviewConteudoComponent,
    ConteudoComponent,
    SelectConteudoComponent,
  ],
  exports: [
  ],
  providers: [ConteudoService],
})
export class ConteudoModule { }
