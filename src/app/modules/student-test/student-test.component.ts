import { Component, OnInit } from '@angular/core';
import { StudentsServiceService } from 'src/app/shared/services/students-service.service';
import { Persona } from '@modules/users-all/domain/Persona';

@Component({
  selector: 'app-student-test',
  templateUrl: './student-test.component.html',
  styleUrls: ['./student-test.component.sass']
})
export class StudentTestComponent implements OnInit {

  section = []

  constructor(
    private service: StudentsServiceService
  ) { }

  ngOnInit() {
    // console.log(Persona);
    this.service.getStudents()
                .subscribe( (item: any) => {
                  this.section =  item.map(item => new Persona(item));

                  console.log('New data ', this.section);
                });

 

  }

  save() {

    // this.service
    //     .createStudents(this.studentsForm.value)
    //     .subscribe( response => { 
    //       console.log('Se ha creado exitosamente.'); 
    //     });
  }

}