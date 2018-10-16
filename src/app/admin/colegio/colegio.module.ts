import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableModule } from '../../@core/components/table/table.module';
import { ThemeModule } from '../../@theme/theme.module';
import { ColegioService } from '../../services/colegio.service';
import { ColegioRoutingModule } from './colegio-routing.module';
import { CreateColegioComponent } from './create-colegio/create-colegio.component';
import { EditColegioComponent } from './edit-colegio/edit-colegio.component';
import { ConteudoService } from '../../services/conteudo.service';
import { FormColegioComponent } from './form-colegio/form-colegio.component';

@NgModule({
  imports: [
    CommonModule,
    ColegioRoutingModule,
    ThemeModule,
    TableModule,
  ],
  exports: [],
  declarations: [
    CreateColegioComponent,
    EditColegioComponent,
    FormColegioComponent,
  ],
  providers: [ ColegioService, ConteudoService ],
})
export class ColegioModule { }
