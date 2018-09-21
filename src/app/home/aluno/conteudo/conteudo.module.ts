import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConteudoComponent } from './conteudo.component';
import { ConteudoRoutingModule } from './/conteudo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ConteudoRoutingModule,
  ],
  declarations: [
    ConteudoComponent,
  ],
  exports: [
  ],
})
export class ConteudoModule { }
