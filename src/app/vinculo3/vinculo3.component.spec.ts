import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vinculo3Component } from './vinculo3.component';

describe('Vinculo3Component', () => {
  let component: Vinculo3Component;
  let fixture: ComponentFixture<Vinculo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vinculo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vinculo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
