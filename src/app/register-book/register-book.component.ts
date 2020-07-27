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
      'autor': new FormControl('', [
        Validators.required
      ]),
      'genero': new FormControl('', [
        Validators.required
      ]),
      'editorial': new FormControl('', [
        Validators.required
      ]),
      'ejemplares':new FormControl('', [
        Validators.required
      ]),
      'codigo': new FormControl('', [
        Validators.required
      ])
    });

  }

  ngOnInit() {
  }

  save() {
    console.log(this.miFormulario.value);
  }

}
