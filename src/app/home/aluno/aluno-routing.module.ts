import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunoComponent } from './aluno.component';
import { RankingComponent } from './recordes/ranking/ranking.component';
import { RecordesComponent } from './recordes/recordes.component';

const routes: Routes = [
  {
    path: '',
    component: AlunoComponent,
    children: [
      {
        path: 'quiz',
        loadChildren: 'app/home/aluno/quiz/quiz.module#QuizModule',
        // path absoluto para permitir que o webpack diferencie home/aluno/quiz de admin/quiz
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
        path: 'conteudo',
        loadChildren: 'app/home/aluno/conteudo/conteudo.module#ConteudoModule',
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
