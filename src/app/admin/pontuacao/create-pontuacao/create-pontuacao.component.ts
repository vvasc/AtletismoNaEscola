import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { Observable } from 'rxjs';
import { NotificacaoService } from '../../../services/notificacao.service';
import { AtividadeService } from '../../../services/atividade.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ngx-create-pontuacao',
  templateUrl: './create-pontuacao.component.html',
  styleUrls: ['./create-pontuacao.component.scss'],
})
export class CreatePontuacaoComponent implements OnInit {
  alunosObs: Observable<any>; // Observable que contem todos os alunos, passado para a tabela
  atividadesObs: Observable<any>; // Observable com todas as atividades, passado para a tabela
  alunoEscolhido; // Objeto que contem os dados do aluno escolhido
  atividadeEscolhida; // Objeto que contem os dados da atividade escolhida

  constructor(
    private accountservice: AccountService,
    private notificacao: NotificacaoService,
    private atividadeservice: AtividadeService,
  ) { }

  ngOnInit() {
    this.alunosObs = this.accountservice.getAllAccounts();
    this.atividadesObs = this.atividadeservice.getAllAtividades().pipe(
      map((atividades: any) => { // refatorando objeto para ser usado na table
        atividades.forEach(element => {
          element.titulopratica = element.provaPratica[0].titulo;
          element.tituloquiz = element.quiz[0].titulo;
        });
        return atividades;
      }),
    );
  }

  selectAluno(event) { // Recebe objeto do aluno clicado na tabela
    this.alunoEscolhido = event;
  }

  selectAtividade(event) { // Recebe objeto da atividade clicado na tabela
    this.atividadeEscolhida = event;
  }

  resolveForm(form) {
    console.log(form);
  }

}
