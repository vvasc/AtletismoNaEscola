import { ThemeModule } from './../../../../../@theme-home/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingTabelaComponent } from './ranking-tabela.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
  ],
  declarations: [RankingTabelaComponent],
  exports: [RankingTabelaComponent],
})
export class RankingTabelaModule { }
