import { CreateAtividadeComponent } from './create-atividade/create-atividade.component';
import { EditAtividadeComponent } from './edit-atividade/edit-atividade.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: 'create', component: CreateAtividadeComponent },
    { path: 'edit', component: EditAtividadeComponent },
    { path: '**', redirectTo: 'create' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AtividadeRoutingModule {}
