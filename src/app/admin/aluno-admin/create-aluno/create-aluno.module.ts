import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAlunoComponent } from './create-aluno.component';
import { ThemeModule } from '../../../@theme-admin/theme.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AccountService } from '../../../services/account.service';
import { FormAlunoModule } from '../form-aluno/form-aluno.module';
import { NotificacaoService } from '../../../services/notificacao.service';

const ALUNO_MODULES = [CommonModule, ThemeModule, NgxSpinnerModule, FormAlunoModule];

@NgModule({
  imports: [
    ...ALUNO_MODULES,
  ],
  declarations: [
    CreateAlunoComponent,
  ],
  providers: [
    AccountService,
    NotificacaoService,
  ],
})
export class CreateAlunoModule { }
