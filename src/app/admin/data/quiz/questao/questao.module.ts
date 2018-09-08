import { NgModule } from '@angular/core';
import { QuestaoComponent } from './questao.component';
import { ThemeModule } from '../../../../@theme-admin/theme.module';


const QUIZ_COMPONENTS = [QuestaoComponent];

@NgModule({
  imports: [ThemeModule],
  declarations: [...QUIZ_COMPONENTS, QuestaoComponent],
  exports: [QuestaoComponent],
})
export class QuestaoModule {}
