import { EditPontuacaoComponent } from './edit-pontuacao/edit-pontuacao.component';
import { CreatePontuacaoComponent } from './create-pontuacao/create-pontuacao.component';
import { PontuacaoComponent } from './pontuacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path: '',
  component: PontuacaoComponent,
   children: [
    {
      path: 'create',
      component: CreatePontuacaoComponent,
    },
    {
      path: 'edit',
      component: EditPontuacaoComponent,
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
export class PontuacaoRoutingModule {}
