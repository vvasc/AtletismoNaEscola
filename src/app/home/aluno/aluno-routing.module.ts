import { AlunoComponent } from './aluno.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecordesComponent } from './recordes/recordes.component';

const routes: Routes = [
  {
    path: '',
    component: AlunoComponent,
    children: [
      {
        path: 'recordes',
        component: RecordesComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunoRoutingModule {}
