import { AlunoAdminComponent } from './aluno-admin.component';
import { EditAlunoComponent } from './edit-aluno/edit-aluno.component';
import { CreateAlunoComponent } from './create-aluno/create-aluno.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path: '',
  component: AlunoAdminComponent,
   children: [
    {
      path: 'create',
      component: CreateAlunoComponent,
    },
    {
      path: 'edit',
      component: EditAlunoComponent,
    },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AlunoAdminRoutingModule {}
