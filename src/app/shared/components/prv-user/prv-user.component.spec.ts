import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrvUserComponent } from './prv-user.component';

describe('PrvUserComponent', () => {
  let component: PrvUserComponent;
  let fixture: ComponentFixture<PrvUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrvUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrvUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
