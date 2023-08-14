import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trucate'
})
export class TrucatePipe implements PipeTransform {

  transform(value: string, maxLength: number): string {
    if (value.length > maxLength) {
      return value.substring(0, maxLength) + '...';
    }
    return value;
  }

}
