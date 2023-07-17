import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { SidebarCalendarComponent } from './sidebar-calendar/sidebar-calendar.component';
import { DaysCalendarComponent } from './days-calendar/days-calendar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MonthInputComponent } from './month-input/month-input.component';
import { DataFormatadaPipe } from 'src/app/shared/pipes/data-formatada.pipe';
import { DiaSemanaPipe } from 'src/app/shared/pipes/dia-semana.pipe';
import { MesAnoPipe } from 'src/app/shared/pipes/mes-ano.pipe';
import { PasseioFormComponent } from './passeio-form/passeio-form.component';
import { MaterialModule } from 'src/app/shared/material/material.module';




@NgModule({
  declarations: [
    CalendarComponent,
    SidebarCalendarComponent,
    DaysCalendarComponent,
    MonthInputComponent,
    DataFormatadaPipe,
    DiaSemanaPipe,
    MesAnoPipe,
    PasseioFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class CalendarModule { }
