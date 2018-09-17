import { RankingModule } from './recordes/ranking/ranking.module';
import { RecordesModule } from './recordes/recordes.module';
import { NgModule } from '@angular/core';
import { AlunoComponent } from './aluno.component';
import { ThemeModule } from '../../@theme-home/theme.module';
import { AlunoRoutingModule } from './aluno-routing.module';
import { QuizModule } from '../../admin/quiz/quiz.module';


const ALUNO_COMPONENTS = [AlunoComponent];

@NgModule({
  imports: [
    AlunoRoutingModule,
    ThemeModule,
    RecordesModule,
    RankingModule,
    QuizModule,
  ],
  declarations: [...ALUNO_COMPONENTS],
  exports: [...ALUNO_COMPONENTS],
})
export class AlunoModule {}
