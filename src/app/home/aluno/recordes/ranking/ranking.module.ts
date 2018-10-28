import { RankingTabelaComponent } from './ranking-tabela/ranking-tabela.component';
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
  exports: [RankingComponent, RankingTabelaComponent],
})
export class RankingModule { }
