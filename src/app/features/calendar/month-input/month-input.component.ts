import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-month-input',
  templateUrl: './month-input.component.html',
  styleUrls: ['./month-input.component.scss']
})
export class MonthInputComponent {
  selectedMonth!: FormControl;
  months: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  @Output() monthSelected: EventEmitter<Date> = new EventEmitter<Date>();


ngOnInit() {
  this.selectedMonth = new FormControl(new Date().getMonth());
}

constructor(private datePipe: DatePipe){}

onMonthChange() {
  const selectedMonth = this.selectedMonth.value;
  const currentYear = new Date().getFullYear();
  const monthDate = new Date(currentYear, selectedMonth, 1);
  this.monthSelected.emit(monthDate);
}



}
