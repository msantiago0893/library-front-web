import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanRegistrationComponent } from './loan-registration.component';

describe('LoanRegistrationComponent', () => {
  let component: LoanRegistrationComponent;
  let fixture: ComponentFixture<LoanRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
