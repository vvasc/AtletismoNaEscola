import { RouterModule } from '@angular/router';
import { TabelaPontuacaoModule } from './tabela-pontuacao/tabela-pontuacao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordesComponent } from './recordes.component';

@NgModule({
  imports: [
    CommonModule,
    TabelaPontuacaoModule,
    RouterModule,
  ],
  declarations: [RecordesComponent],
})
export class RecordesModule { }
