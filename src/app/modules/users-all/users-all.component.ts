import { Component, OnInit, ViewChild } from '@angular/core';
import { UserAccount } from '@services/account.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Alert } from '@utils/alerts';
import { Persona } from './domain/Persona';
import { Router } from '@angular/router';
import {NUMERIC} from '@enums/numeric.enum';
import { MESSAGE } from '@utils/catalog-alert';
import {TYPEALERT} from '@enums/type-alert.enum';

@Component({
  selector: 'app-users-all',
  templateUrl: './list-admon.html',
  styleUrls: ['./users-all.component.sass']
})
export class StudentsConsultComponent implements OnInit {

  arreglo : any =  [];
  data : [];
  numeric = NUMERIC;
  block : Number;

  private alert: Alert = new Alert();

  constructor(
    private _service: UserAccount,
    public router: Router
  ) { }

  ngOnInit() {

    this.allAdmin();
    

  }

  allAdmin(){
    this._service.consultStudents().subscribe(item => {
      this.arreglo = item.filter((elemento:any) => elemento.role === 'MANAGER')
      .map(user => new Persona (user))
    });
  }

  delete(elemento:any) {
    Alert.questions(MESSAGE.QUESTION).then((response)=> {
      if (response.value) {
        this._service.delete(elemento.id).subscribe(()=> {
          this.allAdmin();
          Alert.msgTimer(TYPEALERT.SUCCESS, MESSAGE.DONE)
        });
      }
    });
  }

  // questionDelete(student:any) {

  //   Alert.questions("¿Está seguro de eliminar?")
  //             .then( option => {
  //               /* condicion ternario */
  //               (option.value) ? this.delete(student.id) : null;
  //                 /* if (option.value) {
  //                   this.delete(student.id);
  //                 } */
  //             });
  // }
  // delete(id:any) {
    
  //   this._service.delete(id)
  //                .subscribe(() => {
  //                   this.allAdmin(); 
  //                 });
  // }

}