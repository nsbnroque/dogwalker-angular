import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diaSemana'
})
export class DiaSemanaPipe implements PipeTransform {

  transform(value: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long' // Dia da semana por extenso (ex: segunda-feira)
    };

    const diaDaSemana = value.toLocaleDateString('pt-BR', options);
    return this.capitalizeFirstLetter(diaDaSemana);
  }

  capitalizeFirstLetter(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
