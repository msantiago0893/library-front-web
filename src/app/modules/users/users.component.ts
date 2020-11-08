import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { StudentsServiceService } from '@services/students-service.service';
import { Alert } from '@utils/alerts';
import * as Regex from '@utils/regex';
import * as Catalog from '@utils/catalog';
import { PersonaAdapter } from './domain/persona-adapter';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class StudentsComponent implements OnInit {

  private studentsForm : FormGroup;
  private alert: Alert = new Alert();
  
  constructor(
    private students: FormBuilder,
    private service: StudentsServiceService
  ) { }

  ngOnInit() {
    this.validations();
  }

  onSelectionChanged() {
    this.studentsForm.get('clave').enable();
  }

  save() {

    this.service 
        .createStudent(new PersonaAdapter(this.studentsForm.value))
        .subscribe(() => {
          this.alert.msgTimer('success', Catalog.MESSAGE.ADD);
        });
  }

  validations() {

    this.studentsForm = this.students.group({
      typeUser: ['', [
        Validators.required
      ]],   
      clave: ['', [
        Validators.required, 
        Validators.minLength(4),
        Validators.pattern(Regex.numeric)
      ]],
      degree: ['', [
        Validators.required
      ]],
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.pattern(Regex.name)
      ]],
      surname: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(40),
        Validators.pattern(Regex.name)
      ]],
      mothersuname: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(40),
        Validators.pattern(Regex.name)
      ]],
      sex: ['', [
        Validators.required
      ]],
      cel: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(Regex.numeric)
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern(Regex.email)
      ]],
      postalCode: ['', [
        Validators.required,
        Validators.minLength(4), 
        Validators.maxLength(5),
        Validators.pattern(Regex.numeric)
      ]],
      delegation: ['', [
        Validators.required,
        Validators.minLength(4), 
        Validators.maxLength(40),
        Validators.pattern(Regex.name)
      ]],
      colony: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50),
        Validators.pattern(Regex.name)
      ]],
      street: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(40),
        Validators.pattern(Regex.name)
      ]]
    });
  }
}
