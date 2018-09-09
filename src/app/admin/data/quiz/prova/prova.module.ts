import { TableModule } from './../../../../@core/components/table/table.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../../../@theme-admin/theme.module';
import { ProvaComponent } from './prova.component';
import { SelectProvaComponent } from './select-prova/select-prova.component';


const PROVA_COMPONENTS = [ProvaComponent];

@NgModule({
  imports: [ThemeModule, TableModule],
  declarations: [...PROVA_COMPONENTS, SelectProvaComponent],
  exports: [ProvaComponent],
})
export class ProvaModule {}
