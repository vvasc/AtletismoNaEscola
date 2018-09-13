import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizComponent } from './quiz.component';

const routes: Routes = [
  {
    path: '',
    component: QuizComponent,
    children: [
      {
        path: 'create',
        component: CreateQuizComponent,
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
