import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-events',
  template: `
  <router-outlet></router-outlet>
`,
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
