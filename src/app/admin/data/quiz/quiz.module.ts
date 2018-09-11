import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';

import { ConfirmationModalModule } from '../../../@core/components/confirmation-modal/confirmation-modal.module';
import { ThemeModule } from '../../../@theme-admin/theme.module';
import { QuizService } from '../../../services/quiz.service';
import { ProvaModule } from './prova/prova.module';
import { QuestaoModule } from './questao/questao.module';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';

const QUIZ_COMPONENTS = [QuizComponent];
const QUIZ_MODULES = [
  QuizRoutingModule,
  ThemeModule,
  QuestaoModule,
  ProvaModule,
  MatDialogModule,
  ConfirmationModalModule,
];

@NgModule({
  imports: [...QUIZ_MODULES],
  declarations: [...QUIZ_COMPONENTS],
  providers: [QuizService],
})
export class QuizModule {}
