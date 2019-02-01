import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialComponent } from './tutorial.component';
import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialService } from '../../services/tutorial.service';

@NgModule({
  imports: [
    CommonModule,
    TutorialRoutingModule,
  ],
  declarations: [TutorialComponent],
  providers: [TutorialService],
})
export class TutorialModule { }
