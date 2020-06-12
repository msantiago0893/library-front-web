import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vinculo1Component } from './vinculo1.component';

describe('Vinculo1Component', () => {
  let component: Vinculo1Component;
  let fixture: ComponentFixture<Vinculo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vinculo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vinculo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
