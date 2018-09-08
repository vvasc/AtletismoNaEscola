import { AlunoAdminRoutingModule } from './aluno-admin-routing.module';
import { AlunoAdminComponent } from './aluno-admin.component';
import { EditAlunoModule } from './edit-aluno/edit-aluno.module';
import { CreateAlunoModule } from './create-aluno/create-aluno.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, CreateAlunoModule, EditAlunoModule, AlunoAdminRoutingModule],
  declarations: [AlunoAdminComponent],
  exports: [AlunoAdminComponent],
})
export class AlunoAdminModule { }
