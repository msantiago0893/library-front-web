import { Injectable } from '@angular/core';
import { AlumnoResponse } from '../Interfaces/alumno';

@Injectable({
  providedIn: 'root'
})
export class StudentsServiceService {

  data = [
        {nombre:"Alexa", apellidoPaterno:"Gonzales", apellidoMaterno:"Rosario", edad:24, estatura:156.23},
        {nombre:"alejandro", apellidoPaterno:"Rojas", apellidoMaterno:"Perez", edad:26, estatura:175.12},
        {nombre:"Oscar", apellidoPaterno:"Cruz", apellidoMaterno:"Vega", edad:19, estatura:162.12},
        {nombre:"Ximena", apellidoPaterno:"Torres", apellidoMaterno:"Salazar", edad:22, estatura:165.62},
        {nombre:"Luis", apellidoPaterno:"Rodriguez", apellidoMaterno:"Sanchez", edad:29, estatura:172.12},
        {nombre:"Ricardo", apellidoPaterno:"Ramos", apellidoMaterno:"Gomez", edad:20, estatura:164.52},
      ];
  constructor() { }

  getStudents() {
    return this.data; 
  }
}




