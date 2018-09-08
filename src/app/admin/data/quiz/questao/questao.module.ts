import { NgModule } from '@angular/core';
import { QuestaoComponent } from './questao.component';
import { ThemeModule } from '../../../../@theme-admin/theme.module';


const QUESTAO_COMPONENTS = [QuestaoComponent];

@NgModule({
  imports: [ThemeModule],
  declarations: [...QUESTAO_COMPONENTS],
  exports: [QuestaoComponent],
})
export class QuestaoModule {}
