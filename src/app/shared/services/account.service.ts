import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { StudentsResponse } from '../Interfaces/students';
import { Student } from '../Interfaces/student';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserAccount {


  constructor(
    private http: HttpClient
  ) { }

    private uri:string = environment.baseUrl;

    private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

    create(user: any) {
      return this.http.post(`${this.uri}usuarios`, user, {headers: this.httpHeaders});
    }

  // getStudents(){
  //   return this.http.get(this.uri);
  //   //return this.http.get(this.uri).pipe( map( response => response) );
  // }

  // getStudents():Observable<Persona[]> {
  //   return this.http.get<Persona[]>(this.uri);
  // }

  consultStudents():Observable<StudentsResponse[]> {
    return this.http.get<StudentsResponse[]>(this.uri);
  }

  // createStudents(student: Student): Observable<Student> {
  //   return this.http.post<Student>(this.uri,student, {headers: this.httpHeaders});
  // }

  updateStudents(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.uri}/${student.id}`,student, {headers: this.httpHeaders});
  }

  delete(id:number): Observable<Student> {
    return this.http.delete<Student>(`${this.uri}/${id}`,{headers: this.httpHeaders});
  }

}