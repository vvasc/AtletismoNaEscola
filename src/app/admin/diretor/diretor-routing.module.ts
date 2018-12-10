import { EditDiretorComponent } from './edit-diretor/edit-diretor.component';
import { CreateDiretorComponent } from './create-diretor/create-diretor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'create',
    component: CreateDiretorComponent,
  },
  {
    path: 'edit',
    component: EditDiretorComponent,
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
export class DiretorRoutingModule {}
