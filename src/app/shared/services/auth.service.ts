import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Storage } from '../memento/Storage'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private uri: string = 'http://localhost:8080/';

  // private httpHeaders = new HttpHeaders({
  //   'Content-Type': 'application/json'
  // });

  constructor(
    private httpClient: HttpClient
  ) { }

  login(user:any): Observable<any> {

    const credenciales = btoa('angularapp' + ':' + '12345');

    const header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${credenciales}`
    });

    let params = new URLSearchParams();
      params.set('grant_type', 'password');
      params.set('username', user.email);
      params.set('password', user.password);

    return this.httpClient.post<any>(`${this.uri}oauth/token`, params.toString(), {headers: header})
      .pipe(
        tap(resp => {

          if(resp.access_token){
            Storage.setItem('accessToken',resp.access_token);
            Storage.setItem('user', {
              name: 'admin',
              role: {
                      code: 'CLIENT',
                      description: 'Cliente'
                    }
            });
          }
        }),
        map(resp => {

          if(resp.access_token) {
            return true;
          }
        }),
        catchError(error => of(error.ok))
      );
  }

  isAuthenticated() {
    return Storage.getItem('user');
  }


  // forgotPassword(id:any) {
  //   return this.httpClient.delete(`${this.uri}animales/${id}`, {headers: this.httpHeaders})
  // }

}
