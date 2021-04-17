import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '@modules/animales/domain/Animal';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private uri: string = 'http://localhost:8090/api/';
  
  constructor(
    private httpClient: HttpClient
  ) { }

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  consultAll(): any {

    return this.httpClient.get(`${this.uri}animales`)
                          .pipe(
                            map((animals: Animal[]) => 
                              animals.map(elemento => new Animal(elemento))
                            )
                          );
  }
  

  // consultAll(): any {

  //   return this.httpClient.get(`${this.uri}animales`) // [object,object]
  //                         .pipe(
  //                           // map((animals: Animal[]) => { // si vas hacer uso de los corchetes es por que vas a realizar varias operaciones y dentro lo los corches regresar el valor con un return
  //                           //   console.log('variable animals ', animals)
  //                           //   return animals;
  //                           // })
  //                           map((animals: Animal[]) => animals) // puedes realizar una sola operacion y retornar el valor

  //                         );
  // }

delete(id:any) {
  return this.httpClient.delete(`${this.uri}animales/${id}`, {headers: this.httpHeaders})
}
create(animal:any){
  return this.httpClient.post(`${this.uri}animales`,animal, {headers: this.httpHeaders})
}
consultById(id:number): Observable<Animal> {
  return this.httpClient.get<Animal>(`${this.uri}animales/${id}`);

}
modify(id:number, animal:any) {
  return this.httpClient.put(`${this.uri}animales/${id}`,animal,{headers: this.httpHeaders});

}



}

