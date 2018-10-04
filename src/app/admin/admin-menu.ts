import { NbMenuItem } from '@nebular/theme';

export const PROFESSOR_MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Professor',
    icon: 'nb-gear',
    link: '/admin/main',
    home: true,
  },
  {
    title: 'Ferramentas',
    group: true,
  },
  {
    title: 'Aluno',
    icon: 'ion-person',
    children: [
      {
        title: 'Adicionar Aluno',
        link: '/admin/aluno/create',
      },
      {
        title: 'Editar Aluno',
        link: '/admin/aluno/edit',
      },
    ],
  },
  {
    title: 'Pontuação',
    icon: 'nb-star',
    children: [
      {
        title: 'Criar Pontuação',
        link: '/admin/pontuacao/create',
      },
      {
        title: 'Editar Pontuação',
        link: '/admin/pontuacao/edit',
      },
    ],
  },
  {
    title: 'Atividade',
    icon: 'ion-clipboard',
    children: [
      {
        title: 'Criar Atividade',
        link: '/admin/atividade/create',
      },
      {
        title: 'Editar Atividade',
        link: '/admin/atividade/edit',
      },
    ],
  },
  {
    title: 'Quiz',
    icon: 'ion-help',
    children: [
      {
        title: 'Criar Quiz',
        link: '/admin/quiz/create',
      },
      {
        title: 'Editar Quiz',
        link: '/admin/quiz/edit',
      },
    ],
  },
];

export const DIRETOR_MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Diretor',
    icon: 'nb-gear',
    link: '/admin/main',
    home: true,
  },
  {
    title: 'Ferramentas',
    group: true,
  },
  {
    title: 'Aluno',
    icon: 'ion-person',
    children: [
      {
        title: 'Adicionar Aluno',
        link: '/admin/aluno/create',
      },
      {
        title: 'Editar Aluno',
        link: '/admin/aluno/edit',
      },
    ],
  },
  {
    title: 'Professor',
    icon: 'ion-person',
    children: [
      {
        title: 'Adicionar Professor',
        link: '/admin/professor/create',
      },
      {
        title: 'Editar Professor',
        link: '/admin/professor/edit',
      },
    ],
  },
  {
    title: 'Pontuação',
    icon: 'nb-star',
    children: [
      {
        title: 'Criar Pontuação',
        link: '/admin/pontuacao/create',
      },
      {
        title: 'Editar Pontuação',
        link: '/admin/pontuacao/edit',
      },
    ],
  },
  {
    title: 'Atividade',
    icon: 'ion-clipboard',
    children: [
      {
        title: 'Criar Atividade',
        link: '/admin/atividade/create',
      },
      {
        title: 'Editar Atividade',
        link: '/admin/atividade/edit',
      },
    ],
  },
  {
    title: 'Quiz',
    icon: 'ion-help',
    children: [
      {
        title: 'Criar Quiz',
        link: '/admin/quiz/create',
      },
      {
        title: 'Editar Quiz',
        link: '/admin/quiz/edit',
      },
    ],
  },
];

export const SUPERADMIN_MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'SuperAdmin',
    icon: 'nb-gear',
    link: '/admin/main',
    home: true,
  },
  {
    title: 'Ferramentas',
    group: true,
  },
  {
    title: 'Colégio',
    icon: 'fa fa-bank',
    link: '/admin/colegio/',
  },
  {
    title: 'Professor',
    icon: 'ion-person',
    children: [
      {
        title: 'Adicionar Professor',
        link: '/admin/professor/create',
      },
      {
        title: 'Editar Professor',
        link: '/admin/professor/edit',
      },
    ],
  },
  {
    title: 'Aluno',
    icon: 'ion-person',
    children: [
      {
        title: 'Adicionar Aluno',
        link: '/admin/aluno/create',
      },
      {
        title: 'Editar Aluno',
        link: '/admin/aluno/edit',
      },
    ],
  },
  {
    title: 'Pontuação',
    icon: 'nb-star',
    children: [
      {
        title: 'Criar Pontuação',
        link: '/admin/pontuacao/create',
      },
      {
        title: 'Editar Pontuação',
        link: '/admin/pontuacao/edit',
      },
    ],
  },
  {
    title: 'Atividade',
    icon: 'ion-clipboard',
    children: [
      {
        title: 'Criar Atividade',
        link: '/admin/atividade/create',
      },
      {
        title: 'Editar Atividade',
        link: '/admin/atividade/edit',
      },
    ],
  },
  {
    title: 'Conteúdo',
    icon: 'nb-compose',
    children: [
      {
        title: 'Criar Conteúdo',
        link: '/admin/conteudo/create',
      },
      {
        title: 'Editar Conteúdo',
        link: '/admin/conteudo/edit',
      },
    ],
  },
  {
    title: 'Quiz',
    icon: 'ion-help',
    children: [
      {
        title: 'Criar Quiz',
        link: '/admin/quiz/create',
      },
      {
        title: 'Editar Quiz',
        link: '/admin/quiz/edit',
      },
    ],
  },
];
