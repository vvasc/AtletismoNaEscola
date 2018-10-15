import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EditQuizComponent } from './edit-quiz.component';
const routes: Routes = [
  {
    path: '',
    component: EditQuizComponent,
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
export class EditQuizRoutingModule {}
