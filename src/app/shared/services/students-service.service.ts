import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentsResponse } from '../Interfaces/students';
import { Student } from '../Interfaces/student';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsServiceService {


  constructor(
    private http: HttpClient
  ) { }

    private uri:string ='http://192.168.0.17:8080/api/personas';

    private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  
  getStudents(){
    return this.http.get(this.uri);
    //return this.http.get(this.uri).pipe( map( response => response) );
  }
  createStudent(student: any) {
    return this.http.post(this.uri,student, {headers: this.httpHeaders});
  }
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