import { Pipe, PipeTransform } from '@angular/core';

// Este es el decorador que utilizamos para indicar que esta clase sera un pipe.
@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {
  // Indicamos el tipo de datos que va capturar nuestro pipe
  transform(value: number): unknown {
    // Transformamos el dato.
    return value ** 2;
  }

}
