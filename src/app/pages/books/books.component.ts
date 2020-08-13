import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnInit {

  bookForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    public router: Router
    ){ }

  ngOnInit() {
    this.bookForm = this.fb.group({
      name : [null, [Validators.required, Validators.minLength(5)] ],
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
    console.log(this.bookForm.value);
  }

  testRouter() {
    this.router.navigate(['/home/all-book'])
  }
}