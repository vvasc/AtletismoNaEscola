import { CreateConteudoModule } from './create-conteudo/create-conteudo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConteudoComponent } from './conteudo.component';
import { ConteudoRoutingModule } from './conteudo-routing.module';
import { EditConteudoModule } from './edit-conteudo/edit-conteudo.module';

@NgModule({
  imports: [CommonModule, ConteudoRoutingModule, CreateConteudoModule, EditConteudoModule],
  declarations: [ConteudoComponent],
})
export class ConteudoModule { }
