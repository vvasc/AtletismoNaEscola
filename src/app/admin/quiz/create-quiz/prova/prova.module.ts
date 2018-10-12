import { TableModule } from './../../../../@core/components/table/table.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../../../@theme-admin/theme.module';
import { ProvaComponent } from './prova.component';
import { SelectProvaComponent } from './select-prova/select-prova.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { DragDropModule } from '@angular/cdk/drag-drop';


const PROVA_COMPONENTS = [ProvaComponent, SelectProvaComponent];
const PROVA_MODULES = [ThemeModule, TableModule, NgxSpinnerModule, DragDropModule];

@NgModule({
  imports: [...PROVA_MODULES],
  declarations: [...PROVA_COMPONENTS],
  exports: [ProvaComponent],
  providers: [NgxSpinnerService],
})
export class ProvaModule {}
