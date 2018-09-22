import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CreatePontuacaoModule } from './create-pontuacao/create-pontuacao.module';
import { EditPontuacaoModule } from './edit-pontuacao/edit-pontuacao.module';
import { FormPontuacaoComponent } from './form-pontuacao/form-pontuacao.component';
import { PontuacaoRoutingModule } from './pontuacao-routing.module';
import { PontuacaoComponent } from './pontuacao.component';

@NgModule({
  imports: [CommonModule, PontuacaoRoutingModule, EditPontuacaoModule, CreatePontuacaoModule],
  declarations: [PontuacaoComponent, FormPontuacaoComponent],
  exports: [PontuacaoComponent],
})
export class PontuacaoModule { }
