import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/shared/services/books.service';
import * as Regex from '@utils/regex';

import { Alert } from "@utils/alerts"
import { bookAdapter } from '@modules/books-all/domain/bookAdapter';

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

    console.log('crear libro');
    
    this._service.createBook(new bookAdapter(this.bookForm.value)).subscribe();
    
  }


  update() {
    this._service.updateBook(new bookAdapter(this.bookForm.value));
    
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
