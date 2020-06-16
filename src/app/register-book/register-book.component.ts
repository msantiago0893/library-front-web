import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-book',
  templateUrl: './register-book.component.html',
  styleUrls: ['./register-book.component.sass']
})
export class RegisterBookComponent implements OnInit {

  public miFormulario: FormGroup;


  constructor() {

    this.miFormulario = new FormGroup({
      'Titulo del Libro': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      'Id': new FormControl('', [
        Validators.required
      ]),
      'Autor': new FormControl('', [
        Validators.required
      ]),
      'Editorial': new FormControl('', [
        Validators.required
      ]),
      'Genero':new FormControl('', [
        Validators.required
      ]),
      'Num.ejemplares': new FormControl('', [
        Validators.required
      ])
    });

  }

  ngOnInit() {
  }

  guardarCambios() {
    console.log(this.miFormulario.value);
  }

}
