import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme-admin/theme.module';
import { QuizService } from '../../../services/quiz.service';
import { QuestaoModule } from './questao/questao.module';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { ProvaModule } from './prova/prova.module';

const QUIZ_COMPONENTS = [QuizComponent];

@NgModule({
  imports: [QuizRoutingModule, ThemeModule, QuestaoModule, ProvaModule],
  declarations: [...QUIZ_COMPONENTS],
  providers: [QuizService],
})
export class QuizModule {}
