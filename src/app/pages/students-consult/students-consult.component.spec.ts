import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsConsultComponent } from './students-consult.component';

describe('StudentsConsultComponent', () => {
  let component: StudentsConsultComponent;
  let fixture: ComponentFixture<StudentsConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
