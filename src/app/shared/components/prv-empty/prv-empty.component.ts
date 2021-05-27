import { Component, Input, OnInit } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-prv-empty',
  templateUrl: './prv-empty.component.html',
  styleUrls: ['./prv-empty.component.sass']
})
export class PrvEmptyComponent implements OnInit {

  @Input() msg1: String;

  @Input() msg2: String; //el @input convierte a la variable, en una variable de entrada,
                        //@Input recibe datos del padre

  //@EventEmitter // Envia datos a su padre

  constructor() { }

  ngOnInit() {

  }

}
