import { TableModule } from './../../../../@core/components/table/table.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../../../@theme-admin/theme.module';
import { ProvaComponent } from './prova.component';
import { SelectProvaComponent } from './select-prova/select-prova.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';


const PROVA_COMPONENTS = [ProvaComponent];

@NgModule({
  imports: [ThemeModule, TableModule, NgxSpinnerModule],
  declarations: [...PROVA_COMPONENTS, SelectProvaComponent],
  exports: [ProvaComponent],
  providers: [NgxSpinnerService],
})
export class ProvaModule {}
