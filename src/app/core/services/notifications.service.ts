import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Notifications {

  private uri: string = environment.baseUrl;

  private httpHeaders = new HttpHeaders({
    'Content-Type':'application/json'
  });

  constructor(
    private http: HttpClient
  ) { }

  consultAll(): any {
    // return this.http.get<any[]>(`${this.uri}notifications`);
    return of([
      {
        title: 'Notificación 1',
        description: 'Estos correos electrónicos se envían a la dirección de correo electrónico asociada con la cuenta de Adobe ID.Estos correos electrónicos se envían a la dirección de correo electrónico asociada con la cuenta de Adobe ID.',
        date: '20/06/2021',
        section: 'Prestamo',
        path: 'all-books'
      },
      {
        title: 'Notificación 1',
        description: 'Estos correos electrónicos se envían a la dirección de correo electrónico asociada con la cuenta de Adobe ID.Estos correos electrónicos se envían a la dirección de correo electrónico asociada con la cuenta de Adobe ID.',
        date: '20/06/2021',
        section: 'Prestamo',
        path: 'user'
      },
      {
        title: 'Notificación 1',
        description: 'Estos correos electrónicos se envían a la dirección de correo electrónico asociada con la cuenta de Adobe ID.Estos correos electrónicos se envían a la dirección de correo electrónico asociada con la cuenta de Adobe ID.',
        date: '20/06/2021',
        section: 'Prestamo',
        path: 'all-books'
      },
      {
        title: 'Notificación 1',
        description: 'Estos correos electrónicos se envían a la dirección de correo electrónico asociada con la cuenta de Adobe ID.',
        date: '20/06/2021',
        section: 'Prestamo',
        path: 'user'
      }
    ]);
  }

  update(id:number, user: any) {
    return this.http.put<any>(`${this.uri}notifications/${id}`,user, {headers: this.httpHeaders});
  }
}
