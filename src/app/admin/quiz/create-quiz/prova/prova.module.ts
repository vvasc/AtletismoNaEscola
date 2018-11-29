// tslint:disable-next-line
import { ConfirmationModalComponent } from './../../../../@core/components/confirmation-modal/confirmation-modal.component';
import { ConfirmationModalModule } from './../../../../@core/components/confirmation-modal/confirmation-modal.module';
import { MatDialogModule } from '@angular/material';
import { TableModule } from './../../../../@core/components/table/table.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../../../@theme-admin/theme.module';
import { ProvaComponent } from './prova.component';
import { SelectProvaComponent } from './select-prova/select-prova.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NotificacaoService } from '../../../../services/notificacao.service';


const PROVA_COMPONENTS = [ProvaComponent, SelectProvaComponent];
const PROVA_MODULES = [
  ThemeModule,
  TableModule,
  NgxSpinnerModule,
  DragDropModule,
  MatDialogModule,
  ConfirmationModalModule,
];

@NgModule({
  imports: [...PROVA_MODULES],
  declarations: [...PROVA_COMPONENTS],
  exports: [ProvaComponent],
  providers: [
    NgxSpinnerService,
    NotificacaoService,
  ],
  entryComponents: [ConfirmationModalComponent],
})
export class ProvaModule {}
