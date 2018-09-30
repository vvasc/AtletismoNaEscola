import { RouterModule } from '@angular/router';
import { TabelaPontuacaoModule } from './tabela-pontuacao/tabela-pontuacao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordesComponent } from './recordes.component';
import { PontuacaoService } from './../../../services/pontuacao.service';

@NgModule({
  imports: [
    CommonModule,
    TabelaPontuacaoModule,
    RouterModule,
  ],
  declarations: [RecordesComponent],
  providers: [PontuacaoService],
})
export class RecordesModule { }
