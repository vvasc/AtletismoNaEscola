import { NotificacaoService } from './../../../services/notificacao.service';
import { ConteudoService } from './../../../services/conteudo-service';
import { FormGroup } from '@angular/forms';
import { QuizSailsService } from './../../../services/quiz-sails.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'ngx-create-conteudo',
  templateUrl: './create-conteudo.component.html',
  styleUrls: ['./create-conteudo.component.scss'],
})
export class CreateConteudoComponent implements OnInit {
  quizes;
  formConteudo: FormGroup;
  querying: boolean = false; // Usado para desativar o botao de criação durante os http request
  localstorage$: Subject<string>; // Usado para nao ficar atualizando o storage toda hora, só atualiza a cada 1 seg

  constructor(
    private quizService: QuizSailsService,
    private conteudoService: ConteudoService,
    private notificacao: NotificacaoService,
  ) { }

  ngOnInit() {
    this.localstorage$ = new Subject<string>();
    this.localstorage$.pipe(debounceTime(1000)).subscribe(previewconteudo => {
      window.localStorage.setItem('texto', previewconteudo); // Escreve o texto para o storage a cada 1 seg
    });
    this.refreshQuizes();
  }

  refreshQuizes() { // Pega as quizes que nao tem conteudo associado
    this.quizes = [];
    this.quizService.getQuizesLivres().subscribe(dados => {
      this.quizes = dados;
    }, err => {
      this.notificacao.ngxtoaster('Quizes', 'Não foi possível carregar os quizes! Recarregue a página!', false);
    });
  }

  getForm(form) { // Recebe dados do componente do conteudo form
    this.formConteudo = form;
    this.localstorage$.next(this.formConteudo.value.texto);
  }

  criarConteudo() {
    const formval = this.formConteudo.value;
    if (formval.owner === '') // Conteudo criado com nenhum quiz associado
      delete formval.owner; // Owner aceita só id de quiz (numero inteiro positivo) precisamos deleter nesse caso

    this.querying = true;
    this.conteudoService.createConteudo(formval).subscribe(res => {
      this.querying = false;
      this.notificacao.ngxtoaster('Conteúdo', 'Criado com Sucesso!', true);
      this.refreshQuizes(); // Renova a lista dos quizes livres
      this.formConteudo.reset();
    }, err => {
      this.querying = false;
      if (err.error.code === 'E_UNIQUE')
        this.notificacao.ngxtoaster('Criação Falhou!', 'Já existe conteudo com este título!', false);
      else
        this.notificacao.ngxtoaster('Criação Falhou!', 'Erro na conexão!', false);
    });
  }

  preview() {
    window.localStorage.setItem('texto', this.formConteudo.value.texto); // Escreve no storage o texto
    window.open('http://localhost:4200/#/home/aluno/conteudo/preview', '_blank'); // Abre o preview em outra aba
  }

}
