import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent implements OnInit {
  ranking = {
    ano: 5,
    colegio: 'Colegio Geração Raízes',
    colocacao: 1,
    alunos: [
      {
        nome: 'Maria Luiza R. de Grande',
        pontos: 350,
      },
      {
        nome: 'Afonso Andrade',
        pontos: 110,
      },
      {
        nome: 'Ze Li',
        pontos: 100,
      },
      {
        nome: 'Maria Fera',
        pontos: 87,
      },
      {
        nome: 'Fernanda Roni',
        pontos: 80,
      },
      {
        nome: 'Roberto Silva',
        pontos: 78,
      },
      {
        nome: 'Joselito da Silva',
        pontos: 67,
      },
      {
        nome: 'Alonso Alvez',
        pontos: 66,
      },
      {
        nome: 'Carla Loma',
        pontos: 65,
      },
      {
        nome: 'Ricardo Ribeiro',
        pontos: 65,
      },
      {
        nome: 'Frederico Nascimento',
        pontos: 55,
      },
      {
        nome: 'Lucas Nascimento',
        pontos: 30,
      },
    ],
  };



  constructor() { }

  ngOnInit() {
  }

}
