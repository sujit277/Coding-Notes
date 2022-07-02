import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inrtodol'
})
export class InrtodolPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const[x] = args;
    return value * x;
  }

}
