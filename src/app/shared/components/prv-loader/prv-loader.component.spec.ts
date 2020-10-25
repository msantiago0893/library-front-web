import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrvLoaderComponent } from './prv-loader.component';

describe('PrvLoaderComponent', () => {
  let component: PrvLoaderComponent;
  let fixture: ComponentFixture<PrvLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrvLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrvLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
