import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectToArray',
  pure: true,
})

export class ObjectToArrayPipe implements PipeTransform {
  transform(alternativas: any): any {
    return Object.values(alternativas);
  }
}
