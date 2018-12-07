import { NgModule } from '@angular/core';
import { QuestaoComponent } from './questao.component';
import { ThemeModule } from '../../../../@theme-admin/theme.module';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';


const QUESTAO_COMPONENTS = [QuestaoComponent];

@NgModule({
  imports: [
    ThemeModule,
    NgxSpinnerModule,
  ],
  declarations: [...QUESTAO_COMPONENTS],
  exports: [QuestaoComponent],
  providers: [
    NgxSpinnerService,
  ],
})
export class QuestaoModule {}
