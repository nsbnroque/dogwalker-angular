import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mesAno'
})
export class MesAnoPipe implements PipeTransform {

  private readonly meses: string[] = [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
  ];

  transform(value: Date): string {
    const mes = this.meses[value.getMonth()];
    const ano = value.getFullYear().toString();

    return `${mes} ${ano}`;
  }
}
