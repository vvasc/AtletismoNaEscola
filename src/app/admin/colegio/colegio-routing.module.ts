import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateColegioComponent } from './create-colegio/create-colegio.component';
import { EditColegioComponent } from './edit-colegio/edit-colegio.component';

const routes: Routes = [
  { path: 'create', component: CreateColegioComponent },
  { path: 'edit', component: EditColegioComponent },
  { path: '**', redirectTo: 'create' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColegioRoutingModule { }
