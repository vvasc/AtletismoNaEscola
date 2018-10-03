import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormPontuacaoComponent } from './form-pontuacao/form-pontuacao.component';
import { PontuacaoRoutingModule } from './pontuacao-routing.module';
import { CreatePontuacaoComponent } from './create-pontuacao/create-pontuacao.component';
import { EditPontuacaoComponent } from './edit-pontuacao/edit-pontuacao.component';
import { AccountService } from '../../services/account.service';
import { TableModule } from '../../@core/components/table/table.module';
import { ThemeModule } from '../../@theme-admin/theme.module';
import { AtividadeService } from '../../services/atividade.service';
import { PontuacaoService } from '../../services/pontuacao.service';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    PontuacaoRoutingModule,
    TableModule,
  ],
  declarations: [
    CreatePontuacaoComponent,
    EditPontuacaoComponent,
    FormPontuacaoComponent,
  ],
  providers: [
    AccountService,
    AtividadeService,
    PontuacaoService,
  ],
})
export class PontuacaoModule { }
