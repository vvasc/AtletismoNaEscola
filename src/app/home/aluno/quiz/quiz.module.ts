import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { ShowProvaModule } from '../../../@core/components/show-prova/show-prova.module';
import { QuizSailsService } from '../../../services/quiz-sails.service';
import { AuthService } from '../../../services/login.service';
import { PontuacaoService } from '../../../services/pontuacao.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    QuizRoutingModule,
    ShowProvaModule,
  ],
  declarations: [QuizComponent],
  providers: [
    QuizSailsService,
    AuthService,
    PontuacaoService,
  ],
})
export class QuizModule { }
