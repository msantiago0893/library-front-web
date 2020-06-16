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
      'titulo': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      'id': new FormControl('', [
        Validators.required
      ]),
      'autor': new FormControl('', [
        Validators.required
      ]),
      'editorial': new FormControl('', [
        Validators.required
      ]),
      'genero':new FormControl('', [
        Validators.required
      ]),
      'numEjemplares': new FormControl('', [
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
