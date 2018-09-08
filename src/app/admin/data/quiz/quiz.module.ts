import { NgModule } from '@angular/core';

import { QuizComponent } from './quiz.component';
import { ThemeModule } from '../../../@theme-admin/theme.module';
import { QuizRoutingModule } from './quiz-routing.module';

const QUIZ_COMPONENTS = [QuizComponent];

@NgModule({
  imports: [QuizRoutingModule, ThemeModule],
  declarations: [...QUIZ_COMPONENTS],
})
export class QuizModule {}
