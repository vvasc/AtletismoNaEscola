import { ObjectToArrayPipe } from './objecToArray.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [],
  declarations: [
    ObjectToArrayPipe,
  ],
  exports: [
    ObjectToArrayPipe,
  ],
})
export class PipesModule {
  static forRoot() {
    return {
      ngModule: PipesModule,
      providers: [],
    };
  }
}
