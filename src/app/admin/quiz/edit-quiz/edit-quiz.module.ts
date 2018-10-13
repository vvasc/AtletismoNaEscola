import { PipesModule } from './../../../@core/pipe/pipes.module';
import { CustomizeProvaComponent } from './customize-prova/customize-prova.component';
import { NgModule } from '@angular/core';

import { EditQuizComponent } from './edit-quiz.component';
import { ThemeModule } from '../../../@theme-admin/theme.module';
import { MatDialogModule } from '@angular/material';
import { ConfirmationModalModule } from '../../../@core/components/confirmation-modal/confirmation-modal.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EditQuizRoutingModule } from './edit-quiz-routing.module';
import { TableModule } from '../../../@core/components/table/table.module';

const EDIT_QUIZ_MODULES = [
  ThemeModule,
  MatDialogModule,
  ConfirmationModalModule,
  DragDropModule,
  EditQuizRoutingModule,
  TableModule,
];

@NgModule({
  imports: [
    ...EDIT_QUIZ_MODULES,
    PipesModule,
  ],
  declarations: [
    EditQuizComponent,
    CustomizeProvaComponent,
  ],
  providers: [],
})
export class EditQuizModule { }
