import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BookResponse } from 'src/app/shared/Interfaces/book';
import { Book } from '@modules/books-all/domain/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private httpClient: HttpClient
    ) { }

  private uri: string = 'http://192.168.0.17:8080/api/';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  consultBooks(): Observable<BookResponse[]> {
    return this.httpClient.get<BookResponse[]>(this.uri+'books');
  }

  createBook(book: any) {
    return this.httpClient.post(this.uri+'books', book, {headers: this.httpHeaders});
  }
  updateBook(book: Book){
    return this.httpClient.put<Book>(`${this.uri}books/${book.id}`, book, {headers: this.httpHeaders});
  }
  delete(id:number) {
    return this.httpClient.delete<Book>(`${this.uri}books/${id}`,{headers: this.httpHeaders});
  }

  // allBooks() {
  //   return this.httpClient.get<BookResponse[]>(this.uri);
  // }
}
