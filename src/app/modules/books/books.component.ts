import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/shared/services/books.service';

import { Book } from "./domain/book";

import { Alert } from "@utils/alerts"

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnInit {

  bookForm : FormGroup;
  public book: Book = new Book();

  private alert: Alert = new Alert();

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private _service: BooksService
    ){ }

  ngOnInit() {

    this.bookForm = this.fb.group({
      name : [null, [Validators.required, Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/) , Validators.minLength(5)] ],
      editorial : [null, [Validators.required, Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/), Validators.minLength(5)] ],
      autor : [null, [Validators.required, Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/), Validators.minLength(5)] ],
      genero: [null, [Validators.required, Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/), Validators.minLength(5)] ],
      n_pag: [null, [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.minLength(2)] ],
      year: [null, [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.minLength(4), Validators.maxLength(4)] ]
    });

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
    //this.bookForm.reset();
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
}
