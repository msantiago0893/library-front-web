import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalStaffConsultComponent } from './educational-staff-consult.component';

describe('EducationalStaffConsultComponent', () => {
  let component: EducationalStaffConsultComponent;
  let fixture: ComponentFixture<EducationalStaffConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationalStaffConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationalStaffConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
