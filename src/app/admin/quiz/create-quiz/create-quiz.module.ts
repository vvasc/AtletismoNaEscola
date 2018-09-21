import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';

import { ConfirmationModalModule } from '../../../@core/components/confirmation-modal/confirmation-modal.module';
import { ThemeModule } from '../../../@theme-admin/theme.module';
import { QuizSailsService } from '../../../services/quiz-sails.service';
import {
  ConfirmationModalComponent,
} from './../../../@core/components/confirmation-modal/confirmation-modal.component';
import { CreateQuizRoutingModule } from './create-quiz-routing.module';
import { CreateQuizComponent } from './create-quiz.component';
import { ProvaModule } from './prova/prova.module';
import { QuestaoModule } from './questao/questao.module';

const QUIZ_COMPONENTS = [CreateQuizComponent];
const QUIZ_MODULES = [
  CreateQuizRoutingModule,
  ThemeModule,
  QuestaoModule,
  ProvaModule,
  MatDialogModule,
  ConfirmationModalModule,
];

@NgModule({
  imports: [...QUIZ_MODULES],
  declarations: [...QUIZ_COMPONENTS],
  entryComponents: [ConfirmationModalComponent],
  providers: [QuizSailsService],
})
export class CreateQuizModule {}
