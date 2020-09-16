import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educational } from '../Interfaces/educational';

@Injectable({
  providedIn: 'root'
})
export class EducationalStaffServiceService {

  constructor(
    private http: HttpClient
  ) { }

    private uri:string ='http://192.168.0.17:8080/api/personas';
    private httpHeaders = new HttpHeaders ({'Content-Type':'application/json'}); 

   consult():Observable<Educational[]> {
     return this.http.get<Educational[]>(this.uri);
   } 

   create(educational:Educational): Observable<Educational> {
      return this.http.post<Educational>(this.uri,educational, {headers: this.httpHeaders});
   }

   modify(educational:Educational): Observable<Educational> {
    return this.http.put<Educational>(`${this.uri}/${educational.id}`, educational, {headers: this.httpHeaders});
   }

   delete(id:number): Observable<Educational> {
     return this.http.delete<Educational>(`${this.uri}/${id}`,{headers: this.httpHeaders});
         }

  }



