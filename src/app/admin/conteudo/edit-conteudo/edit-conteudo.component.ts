import { NotificacaoService } from './../../../services/notificacao.service';
import { debounceTime, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { QuizSailsService } from './../../../services/quiz-sails.service';
import { Component, OnInit } from '@angular/core';
import { ConteudoService } from '../../../services/conteudo.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'ngx-edit-conteudo',
  templateUrl: './edit-conteudo.component.html',
  styleUrls: ['./edit-conteudo.component.scss'],
})
export class EditConteudoComponent implements OnInit {
  quizes;
  formConteudo: FormGroup;
  conteudosObs: Observable<any>;
  selecionado; // Conteudo selecionado para dar patch no forms
  querying: boolean = false;
  end = 'http://localhost:4200';
  localstorage$: Subject<string>; // Usado para nao ficar atualizando o storage toda hora, só atualiza a cada 1 seg

  constructor(
    private quizService: QuizSailsService,
    private conteudoService: ConteudoService,
    private notificacao: NotificacaoService,
  ) { }

  ngOnInit() {
    this.localstorage$ = new Subject<string>();
    this.localstorage$.pipe(debounceTime(750)).subscribe(previewconteudo => {
      window.localStorage.setItem('texto', previewconteudo);
    });
    this.refreshQuizes();
    this.refreshConteudo();
  }

  editConteudo() {
    const formval = this.formConteudo.value;
    (formval.owner === '') ? formval.owner = null : null;
    this.conteudoService.patchConteudo(this.selecionado.id, formval).subscribe(succ => {
      this.notificacao.ngxtoaster('Sucesso!', 'Conteúdo Editado com Sucesso!', true);
      this.refreshQuizes();
      this.formConteudo.reset();
    }, err => {
      const errmsg = (err.error.code === 'E_UNIQUE') ? 'Já existe conteúdo com este título!' : 'Falha na conexão!';
      this.notificacao.ngxtoaster('ERRO!', errmsg, false);
    });
  }

  refreshConteudo() {
    this.conteudosObs = this.conteudoService.getAllConteudo().pipe(
      map((conteudos: any) => {
        conteudos.forEach(conteudo => {
          // Refatorando objeto pra ser usado na table
          (conteudo.owner) ? conteudo['tituloquiz'] = conteudo.owner.titulo : null;
        });
        return conteudos;
      }),
    );
    this.conteudosObs.subscribe(null, err => {
      this.notificacao.ngxtoaster('ERRO!', 'Falha na conexão!', false);
    });
  }

  refreshQuizes() {
    this.quizes = [];
    this.quizService.getQuizesLivresConteudo().subscribe(dados => {
      this.quizes = dados;
    }, err => {
      this.notificacao.ngxtoaster('Quizes', 'Não foi possível carregar os quizes! Recarregue a página!', false);
    });
  }

  getForm(form) {
    this.formConteudo = form;
    this.localstorage$.next(this.formConteudo.value.texto);
  }

  select(event) {
    this.selecionado = event;
  }

  preview() {
    window.open(`${this.end}/#/home/aluno/conteudo/preview`, '_blank'); // Abre o preview em outra aba
  }
}
