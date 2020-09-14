import { Component, OnInit, ViewChild } from '@angular/core';
import {  StudentsServiceService } from 'src/app/shared/services/students-service.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Alert } from 'src/app/utils/alerts';

@Component({
  selector: 'app-students-consult',
  templateUrl: './students-consult.component.html',
  styleUrls: ['./students-consult.component.sass']
})
export class StudentsConsultComponent implements OnInit {

  displayedColumns: string[] = ['clave1', 'name', 'sex1', 'cel1', 'edit', 'delete'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  private alert: Alert = new Alert();

  constructor( private _service: StudentsServiceService) { }

  ngOnInit() {
    
    this.allStudents();
    this.dataSource.paginator = this.paginator;
  }

  allStudents() {
    this._service.consultStudents()
                 .subscribe(
                    (item) => { this.dataSource.data = item }
                 );
  }

  questionDelete(student:any) { 
    
    this.alert.questions("¿Está seguro de eliminar?")
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
                 .subscribe(
                    (response) => { this.allStudents(); }
                 );
  }

}