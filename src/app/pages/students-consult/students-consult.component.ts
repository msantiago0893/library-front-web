import { Component, OnInit, ViewChild } from '@angular/core';
import {  StudentsServiceService } from 'src/app/shared/services/students-service.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-students-consult',
  templateUrl: './students-consult.component.html',
  styleUrls: ['./students-consult.component.sass']
})
export class StudentsConsultComponent implements OnInit {

  displayedColumns: string[] = ['clave1', 'name', 'sex1', 'cel1', 'edit', 'delete'];
   dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor( private _service: StudentsServiceService) { }

  ngOnInit() {
    
    this._service.consultStudents().subscribe(item => {
      console.log(item);
      this.dataSource.data = item

    });

   // this.dataSource.paginator = this.paginator;
  }

}
