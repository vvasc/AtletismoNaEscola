import { CreatePontuacaoModule } from './create-pontuacao/create-pontuacao.module';
import { EditPontuacaoModule } from './edit-pontuacao/edit-pontuacao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PontuacaoComponent } from './pontuacao.component';
import { PontuacaoRoutingModule } from './pontuacao-routing.module';

@NgModule({
  imports: [CommonModule, PontuacaoRoutingModule, EditPontuacaoModule, CreatePontuacaoModule],
  declarations: [PontuacaoComponent],
  exports: [PontuacaoComponent],
})
export class PontuacaoModule { }
