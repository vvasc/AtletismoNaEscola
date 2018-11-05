import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { Observable } from 'rxjs';
import { NotificacaoService } from '../../../services/notificacao.service';
import { AtividadeService } from '../../../services/atividade.service';
import { map } from 'rxjs/operators';
import { PontuacaoService } from '../../../services/pontuacao.service';

@Component({
  selector: 'ngx-create-pontuacao',
  templateUrl: './create-pontuacao.component.html',
  styleUrls: ['./create-pontuacao.component.scss'],
})
export class CreatePontuacaoComponent implements OnInit {
  alunosObs: Observable<any>; // Observable que contem todos os alunos, passado para a tabela
  atividadesObs: Observable<any>; // Observable com todas as atividades, passado para a tabela
  alunoEscolhido; // Objeto que contem os dados do aluno escolhido ao clicar na tabela
  atividadeEscolhida; // Objeto que contem os dados da atividade escolhida ao clicar na tabela
  querying: boolean = false;
  formPontuacao; // Contem o form que veio do form component, contendo o ID do aluno e atividade e a pontuacao associada

  constructor(
    private accountservice: AccountService,
    private notificacao: NotificacaoService,
    private atividadeservice: AtividadeService,
    private pontuacaoservice: PontuacaoService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.alunosObs = this.accountservice.getAllAccounts().pipe(
      map((accounts: any) => {
        accounts.map(conta => {
          conta.nomeEscola = conta.escola.nome;
        });
        return accounts;
      }),
    ); // Pega todos os alunos para passar para a tabela
    this.atividadesObs = this.atividadeservice.getAllAtividades().pipe(
      // Pega todas as atividades para passar para a tabela
      map((atividades: any) => { // refatorando objeto para ser usado na table
        atividades.map(element => {
          element.tituloquiz = element.quiz[0].titulo;
        });
        return atividades;
      }),
    );
  }

  scroll(el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  selectAluno(event) { // Recebe objeto do aluno clicado na tabela
    this.alunoEscolhido = event;
  }

  selectAtividade(event) { // Recebe objeto da atividade clicado na tabela
    this.atividadeEscolhida = event;
  }

  resolveForm(form) { // Recebe form emitido do forms acada mudança
    this.formPontuacao = form;
  }

  criarPontuacao() {
    this.querying = true;
    this.spinner.show();
    this.pontuacaoservice.createPontuacao(this.formPontuacao.value).subscribe(sucesso => {
      this.querying = false;
      this.spinnerTimeout();
      this.notificacao.ngxtoaster('SUCESSO!', 'Pontuação criada com sucesso!', true);
      this.formPontuacao.reset();
      this.atividadeEscolhida = null;
      this.alunoEscolhido = null;
    }, err  => {
      this.querying = false;
      this.spinnerTimeout();
      const errmsg = (err.status === 400) ?
      'Já existe pontuacao dessa atividade para esse Aluno!' : 'Não foi possível criar a pontuação';
      this.notificacao.ngxtoaster('ERRO!', errmsg, false);
    });
  }

  spinnerTimeout() {
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

}
