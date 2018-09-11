import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-recordes',
  templateUrl: './recordes.component.html',
  styleUrls: ['./recordes.component.scss'],
})
export class RecordesComponent implements OnInit {

  recordes = {
    atividades: [
      {
        title: 'Corrida rasa de velocidade',
        conteudonumber: 1,
        points: {
          aulapratica: 70,
          quiz: 30,
        },
      },
      {
        title: 'Corrida rasa de resistencia',
        conteudonumber: 2,
        points: {
          aulapratica: 70,
          quiz: 30,
        },
      },
      {
        title: 'Corrida com barreiras e obstaculos',
        conteudonumber: 3,
        points: {
          aulapratica: 50,
          quiz: 0,
        },
      },
      {
        title: 'Corrida de revezamento',
        conteudonumber: 4,
        points: {
          aulapratica: 30,
          quiz: 50,
        },
      },
      {
        title: 'Corrida rasa de velocidade',
        conteudonumber: 5,
        points: {
          aulapratica: 70,
          quiz: 30,
        },
      },
      {
        title: 'Corrida rasa de resistencia',
        conteudonumber: 6,
        points: {
          aulapratica: 70,
          quiz: 30,
        },
      },
      {
        title: 'Corrida com barreiras e obstaculos',
        conteudonumber: 7,
        points: {
          aulapratica: 50,
          quiz: 0,
        },
      },
      {
        title: 'Corrida de revezamento',
        conteudonumber: 8,
        points: {
          aulapratica: 30,
          quiz: 50,
        },
      },
    ],
    total: 660,
  };

  constructor() { }

  ngOnInit() {
  }

}
