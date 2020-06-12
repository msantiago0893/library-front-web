import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-registration',
  templateUrl: './loan-registration.component.html',
  styleUrls: ['./loan-registration.component.sass']
})
export class LoanRegistrationComponent implements OnInit {

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
