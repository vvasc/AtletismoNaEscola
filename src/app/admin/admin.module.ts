import { AuthService } from './../services/login.service';
import { NgModule } from '@angular/core';

import { ThemeModule } from '../@theme-admin/theme.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DataModule } from './data/data.module';
import { RouterModule } from '@angular/router';

const ADMIN_COMPONENTS = [AdminComponent];

@NgModule({
  imports: [AdminRoutingModule, ThemeModule, DataModule, RouterModule],
  declarations: [...ADMIN_COMPONENTS],
  providers: [AuthService],
})
export class AdminModule {}
