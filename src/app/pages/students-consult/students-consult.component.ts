import { Component, OnInit, ViewChild } from '@angular/core';
import {  StudentsServiceService } from 'src/app/shared/services/students-service.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { AlumnoResponse } from 'src/app/shared/Interfaces/alumno';

@Component({
  selector: 'app-students-consult',
  templateUrl: './students-consult.component.html',
  styleUrls: ['./students-consult.component.sass']
})
export class StudentsConsultComponent implements OnInit {

  displayedColumns: string[] = ['name', 'surname', 'momSurname', 'age', 'height'];
  dataSource = new MatTableDataSource<AlumnoResponse>(this._service.getStudents());

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor( private _service: StudentsServiceService) { }

  ngOnInit() {
    console.log(this.dataSource);
    this.dataSource.paginator = this.paginator
  }

}
