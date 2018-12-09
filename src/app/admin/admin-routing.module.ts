import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import {DataComponent} from './data/data.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'main',
        component: DataComponent,
      },
      {
        path: 'quiz',
        loadChildren: './quiz/quiz.module#QuizModule',
      },
      {
        path: 'pontuacao',
        loadChildren: './pontuacao/pontuacao.module#PontuacaoModule',
      },
      {
        path: 'conteudo',
        loadChildren: './conteudo/conteudo.module#ConteudoModule',
      },
      {
        path: 'aluno',
        loadChildren: './aluno-admin/aluno-admin.module#AlunoAdminModule',
      },
      {
        path: 'professor',
        loadChildren: './professor/professor.module#ProfessorModule',
      },
      {
        path: 'diretor',
        loadChildren: './diretor/diretor.module#DiretorModule',
      },
      {
        path: 'atividade',
        loadChildren: './atividade/atividade.module#AtividadeModule',
      },
      {
        path: 'colegio',
        loadChildren: './colegio/colegio.module#ColegioModule',
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
export class AdminRoutingModule {}
