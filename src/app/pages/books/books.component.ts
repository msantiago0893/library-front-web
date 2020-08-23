import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/shared/services/books.service';

import { Book } from "./domain/book";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnInit {

  bookForm : FormGroup;
  public book: Book = new Book();

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private _service: BooksService
    ){ }

  ngOnInit() {

    console.log('Object book ', this.book);

    this.bookForm = this.fb.group({
      name : [null, [Validators.required, Validators.pattern(/^[A-Za-z]*$/), Validators.minLength(5)] ],
      editorial : [null, [Validators.required] ],
      autor : '',
      genero: '',
      n_pag: '',
      año: ''
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
    this.bookForm.reset();
    this.inicializarFormGroup();
  }

  inicializarFormGroup() {
    this.bookForm.setValue({
      name : '',
      editorial : '',
      autor : '',
      genero: '',
      n_pag: '',
      año: ''
    });
  }

  testRouter() {
    this.router.navigate(['/home/all-book'])
  }
}
