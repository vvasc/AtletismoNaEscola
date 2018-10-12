import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
// import { AlunoGuard } from '../guards/aluno-guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'main',
        component: MainComponent,
      },
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
      },
      {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule',
      },
      {
        path: 'aluno',
        loadChildren: './aluno/aluno.module#AlunoModule',
        // canActivate: [AlunoGuard],
      },
      {
        path: '**',
        redirectTo: 'main',
      },
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
