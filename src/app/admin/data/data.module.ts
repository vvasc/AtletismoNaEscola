import { PontuacaoService } from './../../services/pontuacao.service';
import { RankingTabelaModule } from './../../home/aluno/recordes/ranking/ranking-tabela/ranking-tabela.module';
import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme-admin/theme.module';
import { DataComponent } from './data.component';
import { DataRoutingModule } from './data-routing.module';

const DATA_COMPONENTS = [DataComponent];

@NgModule({
  imports: [DataRoutingModule, ThemeModule, RankingTabelaModule],
  declarations: [...DATA_COMPONENTS],
  providers: [PontuacaoService],
})
export class DataModule {}
