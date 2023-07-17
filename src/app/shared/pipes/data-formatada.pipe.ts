import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFormatada'
})
export class DataFormatadaPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(value: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long', // Dia da semana por extenso (ex: segunda-feira)
      month: 'long', // Mês por extenso (ex: janeiro)
      day: 'numeric' // Dia do mês (ex: 1)
    };

    const dataLocalizada = value.toLocaleDateString('pt-BR', options);
    const diaDaSemana = dataLocalizada.split(',')[0].trim();
    const mesEDia = dataLocalizada.split(',')[1].trim();

    const mesEDiaFormatado = this.capitalizeFirstLetter(mesEDia);

    return `${mesEDiaFormatado}`;
  }

  capitalizeFirstLetter(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
