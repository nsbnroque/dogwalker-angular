import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasseioFormComponent } from './passeio-form.component';

describe('PasseioFormComponent', () => {
  let component: PasseioFormComponent;
  let fixture: ComponentFixture<PasseioFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasseioFormComponent]
    });
    fixture = TestBed.createComponent(PasseioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
