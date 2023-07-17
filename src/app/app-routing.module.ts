import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './features/calendar/calendar.component';
import { CalendarModule } from './features/calendar/calendar.module';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {
    path: 'calendar',
    component: CalendarComponent
  },{
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            CalendarModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
