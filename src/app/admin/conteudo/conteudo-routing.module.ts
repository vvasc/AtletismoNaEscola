import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateConteudoComponent } from './create-conteudo/create-conteudo.component';
import { EditConteudoComponent } from './edit-conteudo/edit-conteudo.component';


const routes: Routes = [
  {
    path: 'create',
    component: CreateConteudoComponent,
  },
  {
    path: 'edit',
    component: EditConteudoComponent,
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
export class ConteudoRoutingModule {}
