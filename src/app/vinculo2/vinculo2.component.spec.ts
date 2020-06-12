import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vinculo2Component } from './vinculo2.component';

describe('Vinculo2Component', () => {
  let component: Vinculo2Component;
  let fixture: ComponentFixture<Vinculo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vinculo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vinculo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
