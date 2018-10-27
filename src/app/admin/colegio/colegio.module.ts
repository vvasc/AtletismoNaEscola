import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

import { TableModule } from '../../@core/components/table/table.module';
import { ThemeModule } from '../../@theme/theme.module';
import { ColegioService } from '../../services/colegio.service';
import { ConfirmationModalComponent } from './../../@core/components/confirmation-modal/confirmation-modal.component';
import { ConfirmationModalModule } from './../../@core/components/confirmation-modal/confirmation-modal.module';
import { ColegioRoutingModule } from './colegio-routing.module';
import { CreateColegioComponent } from './create-colegio/create-colegio.component';
import { EditColegioComponent } from './edit-colegio/edit-colegio.component';
import { FormColegioComponent } from './form-colegio/form-colegio.component';

@NgModule({
  imports: [
    CommonModule,
    ColegioRoutingModule,
    ThemeModule,
    TableModule,
    ConfirmationModalModule,
    MatDialogModule,
    NgxSpinnerModule,
  ],
  entryComponents: [
    ConfirmationModalComponent,
  ],
  declarations: [
    CreateColegioComponent,
    EditColegioComponent,
    FormColegioComponent,
  ],
  providers: [
    ColegioService,
    NgxSpinnerService,
  ],
})
export class ColegioModule { }
