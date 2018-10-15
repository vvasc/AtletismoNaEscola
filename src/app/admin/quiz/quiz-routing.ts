import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizComponent } from './quiz.component';

const routes: Routes = [
  {
    path: '',
    component: QuizComponent,
    children: [
      {
        path: 'create',
        loadChildren: './create-quiz/create-quiz.module#CreateQuizModule',
      },
      {
        path: 'edit',
        loadChildren: './edit-quiz/edit-quiz.module#EditQuizModule',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule { }

export const routedComponents = [QuizComponent];
