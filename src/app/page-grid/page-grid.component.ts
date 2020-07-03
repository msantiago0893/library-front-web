import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-grid',
  templateUrl: './page-grid.component.html',
  styleUrls: ['./page-grid.component.sass']
})
export class PageGridComponent implements OnInit {

  public miFormulario: FormGroup;

  constructor() {

  this.miFormulario = new FormGroup({
    'nombre': new FormControl('Jose'),
    'apellido': new FormControl(),
    'correo': new FormControl()
  });

  }

  ngOnInit() {
  }

}
