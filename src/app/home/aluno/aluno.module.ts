import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme-home/theme.module';
import { AlunoRoutingModule } from './aluno-routing.module';
import { RankingModule } from './recordes/ranking/ranking.module';
import { RecordesModule } from './recordes/recordes.module';

@NgModule({
  imports: [
    AlunoRoutingModule,
    ThemeModule,
    RecordesModule,
    RankingModule,
  ],
  declarations: [],
  exports: [],
})
export class AlunoModule {}
