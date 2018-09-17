import { RankingComponent } from './recordes/ranking/ranking.component';
import { AlunoComponent } from './aluno.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecordesComponent } from './recordes/recordes.component';
import { QuizComponent } from '../../admin/quiz/quiz.component';

const routes: Routes = [
  {
    path: '',
    component: AlunoComponent,
    children: [
      {
        path: 'quiz',
        component: QuizComponent,
      },
      {
        path: 'recordes',
        component: RecordesComponent,
      },
      {
        path: 'recordes/ranking',
        component: RankingComponent,
      },
      {
        path: '**',
        redirectTo: 'recordes',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'recordes',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunoRoutingModule {}
