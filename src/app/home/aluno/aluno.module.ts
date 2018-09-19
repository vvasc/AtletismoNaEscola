import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme-home/theme.module';
import { AlunoRoutingModule } from './aluno-routing.module';
import { AlunoComponent } from './aluno.component';
import { RankingModule } from './recordes/ranking/ranking.module';
import { RecordesModule } from './recordes/recordes.module';


const ALUNO_COMPONENTS = [AlunoComponent];

@NgModule({
  imports: [
    AlunoRoutingModule,
    ThemeModule,
    RecordesModule,
    RankingModule,
  ],
  declarations: [...ALUNO_COMPONENTS],
  exports: [...ALUNO_COMPONENTS],
})
export class AlunoModule {}
