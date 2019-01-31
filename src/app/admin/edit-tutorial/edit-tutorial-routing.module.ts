import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTutorialComponent } from './edit-tutorial.component';

const routes: Routes = [
  {
    path: '',
    component: EditTutorialComponent,
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
export class EditTutorialRoutingModule { }
