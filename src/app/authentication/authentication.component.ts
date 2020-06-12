import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.sass']
})
export class AuthenticationComponent implements OnInit {

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
