import { EditProfessorComponent } from './edit-professor/edit-professor.component';
import { CreateProfessorComponent } from './create-professor/create-professor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'create',
    component: CreateProfessorComponent,
  },
  {
    path: 'edit',
    component: EditProfessorComponent,
  },
  {
    path: '**',
    redirectTo: 'create',
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ProfessorRoutingModule {}
