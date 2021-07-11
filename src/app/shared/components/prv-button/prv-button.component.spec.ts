import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrvButtonComponent } from './prv-button.component';

describe('PrvButtonComponent', () => {
  let component: PrvButtonComponent;
  let fixture: ComponentFixture<PrvButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrvButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrvButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
