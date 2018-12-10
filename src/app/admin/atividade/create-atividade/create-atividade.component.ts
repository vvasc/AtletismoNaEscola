import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NotificacaoService } from '../../../services/notificacao.service';
import { AtividadeService } from '../../../services/atividade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-create-atividade',
  templateUrl: './create-atividade.component.html',
  styleUrls: ['./create-atividade.component.scss'],
})
export class CreateAtividadeComponent implements OnInit {
  quizesAsync: Observable<any>;
  formAtividade: FormGroup;
  querying: boolean = false;

  constructor(
    private atividadeService: AtividadeService,
    private notificacao: NotificacaoService,
  ) { }

  ngOnInit() {
  }


  getForm(form) {
    this.formAtividade = form;
  }

  criarAtividade() {
    const formval = this.formAtividade.value;

    this.querying = true;
    this.atividadeService.createAtividade(formval).subscribe(res => {
      this.querying = false;
      this.notificacao.ngxtoaster('Atividade', 'Criado com Sucesso!', true);
      this.formAtividade.reset();
    }, err => {
      this.querying = false;
      const erromsg = (err.error.code === 'E_UNIQUE') ? 'Já existe atividade com este título!' : 'Erro na conexão!';
      this.notificacao.ngxtoaster('Criação Falhou!', erromsg, false);
    });
  }

}
