import { ThemeModule } from './../../@theme/theme.module';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';

const MAIN_COMPONENTS = [MainComponent];

@NgModule({
    imports: [
        ThemeModule,
        RouterModule,
    ],
    declarations: [...MAIN_COMPONENTS],
})

export class MainModule {}
