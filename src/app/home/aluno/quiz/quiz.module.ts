import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [QuizComponent],
})
export class RecordesModule { }