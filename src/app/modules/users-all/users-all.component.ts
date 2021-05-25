import { Component, OnInit, ViewChild } from '@angular/core';
import { UserAccount } from '@services/account.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Alert } from '@utils/alerts';
import { Persona } from './domain/Persona';

@Component({
  selector: 'app-users-all',
  templateUrl: './users-all.component.html',
  styleUrls: ['./users-all.component.sass']
})
export class StudentsConsultComponent implements OnInit {

  arreglo : any;

  private alert: Alert = new Alert();

  constructor( private _service: UserAccount) { }

  ngOnInit() {

    this.allStudents();
  }
 
  animales = [
    {
      'tipoAnimal': 'Raul Gonzales Garza',
      'sexo' : 'M'
    },
    {
      'tipoAnimal': 'Mariana Echeverria Torres',
      'sexo' : 'M'
    },
    {
      'tipoAnimal': 'Roberto Ordoñez Castillo',
      'sexo' : 'M'
    }
  ];





  allStudents() {
  
    this._service.consultStudents()
                  .subscribe(item => {
                    this.arreglo = item.map(item => new Persona(item));
                  });
  }

  questionDelete(student:any) {

    Alert.questions("¿Está seguro de eliminar?")
              .then( option => {
                /* condicion ternario */
                (option.value) ? this.delete(student.id) : null;
                  /* if (option.value) {
                    this.delete(student.id);
                  } */
              });
  }
  delete(id:any) {
    
    this._service.delete(id)
                 .subscribe(() => {
                    this.allStudents(); 
                  });
  }

}