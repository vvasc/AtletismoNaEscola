import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme-admin/theme.module';
import { QuestaoModule } from './questao/questao.module';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';

const QUIZ_COMPONENTS = [QuizComponent];

@NgModule({
  imports: [QuizRoutingModule, ThemeModule, QuestaoModule],
  declarations: [...QUIZ_COMPONENTS],
})
export class QuizModule {}
