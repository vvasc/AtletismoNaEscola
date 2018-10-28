import { NgModule } from '@angular/core';

import { ShowProvaComponent } from './show-prova.component';
import { ThemeModule } from '../../../@theme-home/theme.module';
import { PipesModule } from '../../pipe/pipes.module';
import { ShowQuestaoComponent } from './show-questao/show-questao.component';
import { MatDialogModule } from '@angular/material';
import { ConfirmationModalModule } from '../confirmation-modal/confirmation-modal.module';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

const SHOW_PROVA_MODULES = [
  ThemeModule,
  PipesModule,
  MatDialogModule,
  ConfirmationModalModule,
];

@NgModule({
  imports: [
    SHOW_PROVA_MODULES,
  ],
  exports: [
    ShowProvaComponent,
    ShowQuestaoComponent,
  ],
  declarations: [
    ShowProvaComponent,
    ShowQuestaoComponent,
  ],
  entryComponents: [
    ConfirmationModalComponent,
  ],
  providers: [],
})
export class ShowProvaModule { }
