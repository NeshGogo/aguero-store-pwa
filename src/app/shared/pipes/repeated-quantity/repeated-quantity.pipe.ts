import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeatedQuantity'
})
export class RepeatedQuantityPipe implements PipeTransform {
  transform(values: [], ...args: any[]): unknown {
    const valuesFiltered = values.filter((value: any) => value.id === args[0]);
    return valuesFiltered.length;
  }

}
