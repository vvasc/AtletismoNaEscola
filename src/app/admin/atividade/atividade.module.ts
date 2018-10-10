import { ThemeModule } from './../../@theme/theme.module';
import { AtividadeRoutingModule } from './atividade-routing.module';
import { EditAtividadeComponent } from './edit-atividade/edit-atividade.component';
import { CreateAtividadeComponent } from './create-atividade/create-atividade.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAtividadeComponent } from './form-atividade/form-atividade.component';
import { QuizSailsService } from '../../services/quiz-sails.service';
import { AtividadeService } from '../../services/atividade.service';
import { ProvaService } from '../../services/prova.service';

@NgModule({
  imports: [
    CommonModule,
    AtividadeRoutingModule,
    ThemeModule,
  ],
  declarations: [
    CreateAtividadeComponent,
    EditAtividadeComponent,
    FormAtividadeComponent,
  ],
  providers: [
    QuizSailsService,
    AtividadeService,
    ProvaService,
  ],
})
export class AtividadeModule { }
