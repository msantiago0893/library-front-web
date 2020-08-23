import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.sass']
})
export class StudentsComponent implements OnInit {

  private studentsForm : FormGroup;

  constructor(
    private students: FormBuilder
  ) { }

  ngOnInit() {
    this.studentsForm = this.students.group({
      name:['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/) ] ],
      apellido:['', [Validators.required, Validators.minLength(4), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)] ],
      apellido2:[null, [Validators.required, Validators.minLength(4), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)] ],
      age:[null, [Validators.required, Validators.pattern(/^[0-9]*$/)] ],
      phone:[null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)] ],
      email:[null, [Validators.required, Validators.pattern(/(^[\w\d-!#$%&'*+/=?^`{|}]+(\.[\w\d-!#$%&'*+/=?^`{|}]+)*@[\w\d {\/\-\}]+(\.[\w\d-]+)*(\.[a-z]{2,3})$)/)	]],
      postalCode:[null, [Validators.required, Validators.minLength(4), Validators.pattern(/^[0-9]*$/)] ] 
    });
  }

 submit() {
   if (!this.studentsForm.valid) {
     return;
   }
   console.log(this.studentsForm.value);
 } 
}
