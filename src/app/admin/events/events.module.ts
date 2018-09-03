import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme-admin/theme.module';
import { EventsRoutingModule} from './events-routing.component';
import { EventsComponent } from './events.component';
import { EditEventsModule } from './edit-events/edit-events.module';
import { CreateEventModule } from './create-event/create-event.module';


const CREATEEVENT_COMPONENTS = [EventsComponent];


@NgModule({
  imports: [
    ThemeModule,
    EventsRoutingModule,
    EditEventsModule,
    CreateEventModule,
  ],
  declarations: [
    CREATEEVENT_COMPONENTS,
  ],
})
export class EventsModule { }
