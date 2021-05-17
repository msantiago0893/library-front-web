import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrvEmptyComponent } from './prv-empty.component';

describe('PrvEmptyComponent', () => {
  let component: PrvEmptyComponent;
  let fixture: ComponentFixture<PrvEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrvEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrvEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
