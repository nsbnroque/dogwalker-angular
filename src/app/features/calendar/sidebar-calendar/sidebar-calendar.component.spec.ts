import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCalendarComponent } from './sidebar-calendar.component';

describe('SidebarCalendarComponent', () => {
  let component: SidebarCalendarComponent;
  let fixture: ComponentFixture<SidebarCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarCalendarComponent]
    });
    fixture = TestBed.createComponent(SidebarCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
