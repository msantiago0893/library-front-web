import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dao } from 'src/app/shared/Interfaces/dao';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAccount implements Dao {

  private uri: string = environment.baseUrl;

  private httpHeaders = new HttpHeaders({
    'Content-Type':'application/json'
  });

  constructor(
    private http: HttpClient
  ) { }

  consultAll() {
    return this.http.get<any[]>(`${this.uri}usuarios`);
  }

  add(user: Object) {
    return this.http.post(`${this.uri}usuarioss`, user, {headers: this.httpHeaders});
  }

  delete(id: number) {
    return this.http.delete<any>(`${this.uri}usuarios/${id}`,{headers: this.httpHeaders});
  }

  update(user: any) {
    return this.http.put<any>(`${this.uri}/${user.id}`,user, {headers: this.httpHeaders});
  }
}
