import { AuthService } from './../../../../../services/login.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-ranking-tabela',
  templateUrl: './ranking-tabela.component.html',
  styleUrls: ['./ranking-tabela.component.scss'],
})
export class RankingTabelaComponent implements OnInit {
  @Input() dados;
  user;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.isLogged().subscribe(info => {
      this.user = info;
    });
  }

}
