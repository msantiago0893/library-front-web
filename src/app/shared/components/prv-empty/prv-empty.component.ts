import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prv-empty',
  templateUrl: './prv-empty.component.html',
  styleUrls: ['./prv-empty.component.sass']
})
export class PrvEmptyComponent implements OnInit {

  @Input() title: String;

  @Input() msg: String; //el @input convierte a la variable, en una variable de entrada,
                        //@Input recibe datos del padre

  constructor() { }

  ngOnInit() {

  }

}
