import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateanimalesComponent } from './createanimales.component';

describe('CreateanimalesComponent', () => {
  let component: CreateanimalesComponent;
  let fixture: ComponentFixture<CreateanimalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateanimalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateanimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
