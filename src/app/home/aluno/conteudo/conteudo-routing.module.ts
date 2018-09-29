import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConteudoComponent } from './conteudo.component';

const routes: Routes = [
  {
    path: '',
    component: ConteudoComponent,
  },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConteudoRoutingModule { }