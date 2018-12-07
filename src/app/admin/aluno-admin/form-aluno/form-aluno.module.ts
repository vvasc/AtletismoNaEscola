import { AuthService } from './../../../services/login.service';
import { NgModule } from '@angular/core';

import { FormAlunoComponent } from './form-aluno.component';
import { ThemeModule } from '../../../@theme-admin/theme.module';

@NgModule({
  imports: [ThemeModule],
  exports: [FormAlunoComponent],
  declarations: [FormAlunoComponent],
  providers: [AuthService],
})
export class FormAlunoModule { }
