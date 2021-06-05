import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dao } from 'src/app/shared/Interfaces/dao';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BookService implements Dao {

  private uri: string = environment.baseUrl;

  private httpHeaders = new HttpHeaders({
    'Content-Type':'application/json'
  });

  constructor(
    private http: HttpClient
  ) { }

  consultAll(): any {
    return [];
    // return this.http.get(`${this.uri}books`)
    //                         .pipe(
    //                            map( (books: Book[]) =>
    //                              books.map(elemento => new Book(elemento))
    //                         ));
  }

  add(item: Object) {
    return this.http.post(`${this.uri}books`,item,{headers: this.httpHeaders});
  }

  delete(id: number) {
    return this.http.delete(`${this.uri}books/${id}`,{headers: this.httpHeaders});
  }

  update(item: any) {
    return this.http.put(`${this.uri}books/${item.id}`,item.book, {headers: this.httpHeaders});
  }
}
