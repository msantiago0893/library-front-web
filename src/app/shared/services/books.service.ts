import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Crud } from '../Interfaces/crud';
import { map } from 'rxjs/operators';
import { Book } from '@modules/books/book';
import { throwToolbarMixedModesError } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class BooksService  implements Crud {

  constructor(
    private httpClient: HttpClient
    ) { }
  modify(id: number, object: any) {
    throw new Error('Method not implemented.');
  }
  private uri: string = 'http://localhost:8080/api/';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  consultAll():any {
    return this.httpClient.get(`${this.uri}books`)
                            .pipe(
                               map( (books: Book[]) => 
                                 books.map(elemento => new Book(elemento))
                            ));
  }
  delete(id: any) {
    return this.httpClient.delete(`${this.uri}books/${id}`,{headers: this.httpHeaders});
  }
  create(book: any) {
    return this.httpClient.post(`${this.uri}books`,book,{headers: this.httpHeaders});
  }
  consultById(id: any) {
    return this.httpClient.get(`${this.uri}books/${id}`,{headers: this.httpHeaders});
  }
  update(id: number, book:any) {
    return this.httpClient.put(`${this.uri}books/${id}`,book, {headers: this.httpHeaders});
  }

}
