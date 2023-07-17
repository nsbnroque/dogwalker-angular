import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Passeio } from 'src/app/core/models/passeio';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit{
  @Input() mes! : string;
  selectedMonth: Date = new Date();
  mesSelecionado!: number;
  selectedDay!: any;
  agendarPasseio : boolean = false;

  ngOnInit(): void {
    this.mes = this.selectedMonth.getMonth().toString();
    this.selectedDay = new Date;
  }

  onMonthSelected($event: Date) {
    let mes  = new Date($event);
    this.mesSelecionado = mes.getMonth();
    this.selectedMonth = mes;
}

  onDaySelected($event : any){
    this.selectedDay = new Date($event);
}
}

