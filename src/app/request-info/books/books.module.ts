import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { RegisterBookComponent } from './register-book/register-book.component';
import { ViewBooksComponent } from './view-books/view-books.component';


@NgModule({
  declarations: [RegisterBookComponent, ViewBooksComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
