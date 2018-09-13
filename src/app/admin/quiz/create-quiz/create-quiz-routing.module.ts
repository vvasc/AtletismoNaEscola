import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreateQuizComponent } from './create-quiz.component';
const routes: Routes = [
  {
    path: '',
    component: CreateQuizComponent,
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
export class CreateQuizRoutingModule {}
