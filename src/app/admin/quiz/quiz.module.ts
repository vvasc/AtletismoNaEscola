import { QuizSailsService } from './../../services/quiz-sails.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { QuizRoutingModule } from './quiz-routing';
import { QuizComponent } from './quiz.component';

@NgModule({
  imports: [CommonModule, QuizRoutingModule],
  exports: [],
  declarations: [QuizComponent],
  providers: [QuizSailsService],
})
export class QuizModule { }
