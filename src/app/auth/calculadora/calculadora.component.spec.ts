import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let calculadora: CalculadoraComponent;

  beforeEach(async(()=> {
    calculadora = new CalculadoraComponent();
  }));

  it('Prueba suma', async(() => {
    expect(calculadora.suma(2,2)).toEqual(5);
  }));

  it('Prueba Resta', async(() => {
    expect(calculadora.resta(5,2)).toEqual(3);
  }));

});
