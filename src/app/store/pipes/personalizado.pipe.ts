import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personalizado'
})
export class PersonalizadoPipe implements PipeTransform {

  transform(value: string, emergencyImg: string='./assets/img/iconoHamburguesa.jpg'): string {
    return value || emergencyImg;
  }

}
