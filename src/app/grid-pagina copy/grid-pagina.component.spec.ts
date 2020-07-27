import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPaginaComponent } from './grid-pagina.component';

describe('GridPaginaComponent', () => {
  let component: GridPaginaComponent;
  let fixture: ComponentFixture<GridPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
