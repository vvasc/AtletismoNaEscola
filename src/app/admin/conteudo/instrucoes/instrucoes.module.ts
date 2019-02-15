import { NgModule } from '@angular/core';

import { InstrucoesComponent } from './instrucoes.component';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../../@theme-admin/theme.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
  ],
  exports: [InstrucoesComponent],
  declarations: [InstrucoesComponent],
})
export class InstrucoesModule { }
