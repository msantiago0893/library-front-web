import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-grid-pagina',
  templateUrl: './grid-pagina.component.html',
  styleUrls: ['./grid-pagina.component.sass']
})
export class GridPaginaComponent implements OnInit {

  public miFormulario: FormGroup;

  constructor() { 
    this.miFormulario = new FormGroup({
      'titulo': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      'id': new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit() {
  }

}
