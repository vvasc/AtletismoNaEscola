import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    QuizRoutingModule,
  ],
  declarations: [QuizComponent],
})
export class QuizModule { }
