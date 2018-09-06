import { NgModule } from '@angular/core';

import { ThemeModule } from '../@theme-home/theme.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MainModule } from './main/main.module';

const HOME_COMPONENTS = [HomeComponent];

@NgModule({
  imports: [HomeRoutingModule, ThemeModule, MainModule],
  declarations: [...HOME_COMPONENTS],
})
export class HomeModule {}
