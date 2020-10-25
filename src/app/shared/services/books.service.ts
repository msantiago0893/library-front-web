import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BookResponse } from 'src/app/shared/Interfaces/book';
import { Book } from '@modules/books/domain/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private httpClient: HttpClient
    ) { }

  private uri: string = 'http://192.168.0.17:8080/api/';


  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});


  // allBooks() {
  //   return this.httpClient.get<any>(this.uri);
  // }

  // allBooks(): Observable<any> {
  //   return this.httpClient.get<any>(this.uri);
  // }

  allBooks(): Observable<BookResponse[]> {
    return this.httpClient.get<BookResponse[]>(this.uri+'books');
  }

  createBook(book: Book): Observable<Book> {
    console.log('Guardar', book);
    return this.httpClient.post<Book>(this.uri+'books', book, {headers: this.httpHeaders});
  }
  updateBook(book: Book): Observable<Book> {
    console.log('Guardar', book);
    return this.httpClient.put<Book>(`${this.uri}books/${book.id}`, book, {headers: this.httpHeaders});
  }
  delete(id:number): Observable<Book> {
    return this.httpClient.delete<Book>(`${this.uri}books/${id}`,{headers: this.httpHeaders});
  }

  // allBooks() {
  //   return this.httpClient.get<BookResponse[]>(this.uri);
  // }
}
