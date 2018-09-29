import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConteudoComponent } from './conteudo.component';
import { SelectConteudoComponent } from './select-conteudo/select-conteudo.component';

const routes: Routes = [
  {
    path: '',
    component: ConteudoComponent,
  },
  {
    path: ':id',
    component: SelectConteudoComponent,
  },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConteudoRoutingModule { }
