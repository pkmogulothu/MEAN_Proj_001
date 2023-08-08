import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'digitcount'
})
export class DigitcountPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(val : number) : number { 
    return val.toString().length; 
}
}
