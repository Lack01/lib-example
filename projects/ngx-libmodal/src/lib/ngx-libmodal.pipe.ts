import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngxLibmodal',
  standalone: true
})
export class NgxLibmodalPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
