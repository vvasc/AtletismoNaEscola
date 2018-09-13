import { QuizRoutingModule } from './quiz-routing';
import { CreateQuizModule } from './create-quiz/create-quiz.module';
import { NgModule } from '@angular/core';

import { QuizComponent } from './quiz.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, QuizRoutingModule, CreateQuizModule],
  exports: [],
  declarations: [QuizComponent],
  providers: [],
})
export class QuizModule { }
