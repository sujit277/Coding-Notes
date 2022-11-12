import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

  transform(value: string, args: string): any {
    if (!args) {
      return null;
    }
    return value;

  }

}
