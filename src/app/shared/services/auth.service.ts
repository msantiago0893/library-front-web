import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private uri: string = 'http://localhost:8090/api/';

  constructor(
    private httpClient: HttpClient
  ) { }

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  login(animal:any){
    return this.httpClient.post(`${this.uri}animales`,animal, {headers: this.httpHeaders})
  }

  forgotPassword(id:any) {
    return this.httpClient.delete(`${this.uri}animales/${id}`, {headers: this.httpHeaders})
  }

}
