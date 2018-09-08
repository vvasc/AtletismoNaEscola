import { NgModule } from '@angular/core';
import { ThemeModule } from '../../../../@theme-admin/theme.module';
import { ProvaComponent } from './prova.component';


const PROVA_COMPONENTS = [ProvaComponent];

@NgModule({
  imports: [ThemeModule],
  declarations: [...PROVA_COMPONENTS],
  exports: [ProvaComponent],
})
export class ProvaModule {}
