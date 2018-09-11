import { RankingTabelaModule } from './ranking-tabela/ranking-tabela.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingComponent } from './ranking.component';

@NgModule({
  imports: [
    CommonModule,
    RankingTabelaModule,
  ],
  declarations: [RankingComponent],
  exports: [RankingComponent],
})
export class RankingModule { }
