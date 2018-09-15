import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConteudoComponent } from '../../admin/conteudo/conteudo.component';
import { AlunoComponent } from './aluno.component';
import { RankingComponent } from './recordes/ranking/ranking.component';
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
      {
        path: 'recordes/ranking',
        component: RankingComponent,
      },
      {
        path: 'conteudo',
        redirectTo: ConteudoComponent,
      },
      {
        path: '**',
        redirectTo: 'recordes',
      },
      
    ],
  },
  {
    path: '**',
    redirectTo: 'recordes',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunoRoutingModule {}
