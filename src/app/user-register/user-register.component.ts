import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.sass']
})
export class UserRegisterComponent implements OnInit {

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
