import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysCalendarComponent } from './days-calendar.component';

describe('DaysCalendarComponent', () => {
  let component: DaysCalendarComponent;
  let fixture: ComponentFixture<DaysCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaysCalendarComponent]
    });
    fixture = TestBed.createComponent(DaysCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
