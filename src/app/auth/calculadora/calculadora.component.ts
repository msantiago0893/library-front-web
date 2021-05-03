import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.sass']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  suma(n1:number, n2:number) {
    return n1+n2;
  }

  resta(n1:number, n2:number) {
    return n1 - n2;
  }

  multiplicacion(n1:number, n2:number) {
    return n1 * n2;
  }

  division(n1:number, n2:number) {
    return n1 % n2;
  }

}
