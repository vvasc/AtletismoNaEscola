import { EditPontuacaoComponent } from './edit-pontuacao/edit-pontuacao.component';
import { CreatePontuacaoComponent } from './create-pontuacao/create-pontuacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'create',
    component: CreatePontuacaoComponent,
  },
  {
    path: 'edit-atividade',
    component: EditPontuacaoComponent,
    data: { type: 'atividade' },
  },
  {
    path: 'edit-quiz',
    component: EditPontuacaoComponent,
    data: { type: 'quiz' },
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
export class PontuacaoRoutingModule {}
