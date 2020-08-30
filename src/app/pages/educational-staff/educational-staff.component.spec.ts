import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalStaffComponent } from './educational-staff.component';

describe('EducationalStaffComponent', () => {
  let component: EducationalStaffComponent;
  let fixture: ComponentFixture<EducationalStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationalStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationalStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
