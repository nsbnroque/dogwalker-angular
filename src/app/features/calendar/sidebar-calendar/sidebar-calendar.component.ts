import { Component, Input } from '@angular/core';
import { Passeio } from 'src/app/core/models/passeio';
import { DataFormatadaPipe } from 'src/app/shared/pipes/data-formatada.pipe';


@Component({
  selector: 'app-sidebar-calendar',
  templateUrl: './sidebar-calendar.component.html',
  styleUrls: ['./sidebar-calendar.component.scss']
})
export class SidebarCalendarComponent {
  @Input() selectedDay! : Date;
  @Input() passeio! : Passeio;

  constructor(){}

  ngOnInit(){
    console.log(this.selectedDay);
  }
}
