import { ThemeModule } from './../../@theme/theme.module';
import { AtividadeRoutingModule } from './atividade-routing.module';
import { EditAtividadeComponent } from './edit-atividade/edit-atividade.component';
import { CreateAtividadeComponent } from './create-atividade/create-atividade.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAtividadeComponent } from './form-atividade/form-atividade.component';
import { QuizSailsService } from '../../services/quiz-sails.service';
import { AtividadeService } from '../../services/atividade.service';
import { TableModule } from '../../@core/components/table/table.module';

@NgModule({
  imports: [
    CommonModule,
    AtividadeRoutingModule,
    ThemeModule,
    TableModule,
  ],
  declarations: [
    CreateAtividadeComponent,
    EditAtividadeComponent,
    FormAtividadeComponent,
  ],
  providers: [
    QuizSailsService,
    AtividadeService,
  ],
})
export class AtividadeModule { }
