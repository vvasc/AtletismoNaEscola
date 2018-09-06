import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { TableComponent } from './table.component';
import { ThemeModule } from '../../../@theme/theme.module';
import { TableService } from '../../../services/table.service';

@NgModule({
  declarations: [
    TableComponent,
  ],
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
  ],
  providers: [
    TableService,
  ],
  exports: [
    TableComponent,
  ],
})
export class TableModule { }
