import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Storage } from 'src/app/memento/Storage';
import { environment } from 'src/environments/environment';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN = 'token';
  private readonly USER = 'user';
  private readonly CODE = 'user';
  private readonly ID = 'user';

  private uri: string = environment.authUrl;

  constructor(
    private httpClient: HttpClient,
    private _sessionService: SessionService
  ) { }

  login(user:any): Observable<any> {

    const credenciales = btoa(`${this.CODE} : ${this.ID} `);

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
        tap(response => {

          if(response.access_token) {

            Storage.setItem(this.TOKEN, response.access_token);
            Storage.setItem(this.USER, this._sessionService.infoUser(response.access_token));
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
}
