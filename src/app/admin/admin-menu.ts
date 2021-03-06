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
        title: 'Editar Pontuação Atividade',
        link: '/admin/pontuacao/edit-atividade',
      },
      {
        title: 'Editar Pontuação Quiz',
        link: '/admin/pontuacao/edit-quiz',
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
    title: 'Tutorial',
    icon: 'nb-info',
    link: '/admin/tutorial',
  },
  {
    title: 'Colégio',
    icon: 'fa fa-bank',
    children: [
      {
        title: 'Adicionar Colégio',
        link: '/admin/colegio/create',
      },
      {
        title: 'Editar Colégio',
        link: '/admin/colegio/edit',
      },
    ],
  },
  {
    title: 'Diretor',
    icon: 'ion-person',
    children: [
      {
        title: 'Adicionar Diretor',
        link: '/admin/diretor/create',
      },
      {
        title: 'Editar Diretor',
        link: '/admin/diretor/edit',
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
