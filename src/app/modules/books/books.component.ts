import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/shared/services/books.service';
import * as Regex from '@utils/regex';
import { Book } from "./domain/book";

import { Alert } from "@utils/alerts"

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnInit {

  bookForm : FormGroup;
  //public book: Book = new Book(data: any);

  private alert: Alert = new Alert();

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private _service: BooksService
    ){ }

  ngOnInit() {
    this.validators();
  }

  alerta() {
    this.alert.questions('Esta seguro de eliminar el elemento?')
    .then((result) => {
      if (result.value) {
        console.log('He resionado el boton aceptar');
      }
    });
  }

  submit() {
    if (!this.bookForm.valid) {
       return;
    }
    this._service.createBook(this.bookForm.value).subscribe();
    this.bookForm.reset();
  }

  clear() {
    this.inicializarFormGroup();
  }

  inicializarFormGroup() {
    this.bookForm.setValue({
      name : null,
      editorial : null,
      autor : null,
      genero: null,
      n_pag: null,
      year: null
    });
  }

  testRouter() {
    this.router.navigate(['/home/all-book'])
  }
  validators() {
    this.bookForm = this.fb.group({
      name:['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.pattern(Regex.name)
      ]],
      editorial:['', [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(30), 
        Validators.pattern(Regex.name)
      ]],
      autor:['', [
        Validators.required,
        Validators.minLength(3), 
        Validators.maxLength(30), 
        Validators.pattern(Regex.name)
      ]], 
      genero:['', [
        Validators.required,
        Validators.minLength(3), 
        Validators.maxLength(30), 
        Validators.pattern(Regex.name)
      ]],
      nPagina:['', [
        Validators.required,
        Validators.minLength(2), 
        Validators.maxLength(10), 
        Validators.pattern(Regex.numeric)
      ]],
      year:['', [
        Validators.required,
        Validators.minLength(4), 
        Validators.maxLength(30), 
        Validators.pattern(Regex.numeric)
      ]]
    })
  
  }
}
