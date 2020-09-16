import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator } from '@angular/material';
import { Alert } from 'src/app/utils/alerts';
import { EducationalStaffServiceService } from 'src/app/shared/services/educational-staff-service.service';

@Component({
  selector: 'app-educational-staff-consult',
  templateUrl: './educational-staff-consult.component.html',
  styleUrls: ['./educational-staff-consult.component.sass']
})
export class EducationalStaffConsultComponent implements OnInit {
  displayedColumns: string[] = ['name', 'clave', 'tipePerson', 'telefono', 'edit', 'delete'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  private alert: Alert = new Alert();

  constructor(
    private _service: EducationalStaffServiceService

    
    ) {

     }

  ngOnInit() {
     
    this.allEducational();
    this.dataSource.paginator = this.paginator;
  }
  allEducational() {
    this._service.consult()
                 .subscribe(
                    (item) => { this.dataSource.data = item }
                 );
  }

}
