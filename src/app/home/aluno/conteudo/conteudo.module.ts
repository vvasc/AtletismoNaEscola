import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConteudoComponent } from './conteudo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConteudoComponent
  ],
  exports: [
    ConteudoComponent
  ]
})
export class ConteudoModule { }
