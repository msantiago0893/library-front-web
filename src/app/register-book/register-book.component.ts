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
      'nombre': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'apellido': new FormControl('', [
        Validators.required
      ]),
      'sexo': new FormControl('', [
        Validators.required
      ]),
    });

  }

  ngOnInit() {
  }

  guardarCambios() {
    console.log(this.miFormulario.value);
  }

}
