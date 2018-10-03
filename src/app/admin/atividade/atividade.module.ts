import { ThemeModule } from './../../@theme/theme.module';
import { AtividadeRoutingModule } from './atividade-routing.module';
import { EditAtividadeComponent } from './edit-atividade/edit-atividade.component';
import { CreateAtividadeComponent } from './create-atividade/create-atividade.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AtividadeRoutingModule,
    ThemeModule,
  ],
  declarations: [
    CreateAtividadeComponent,
    EditAtividadeComponent,
  ],
})
export class AtividadeModule { }
