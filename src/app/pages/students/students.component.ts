import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentsServiceService } from 'src/app/shared/services/students-service.service';
import { BooksService } from 'src/app/shared/services/books.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.sass']
})
export class StudentsComponent implements OnInit {

  private studentsForm : FormGroup;

  constructor(
    private students: FormBuilder,
    private service: StudentsServiceService
  ) { }

  ngOnInit() {
    this.validateForm();
  }

  validateForm() {
    this.studentsForm = this.students.group({
      name:['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/) ] ],
      surname:['', [Validators.required, Validators.minLength(4), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)] ],
      mothersuname:[null, [Validators.required, Validators.minLength(4), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)] ],
      sex:[null, [Validators.required, Validators.pattern(/^[0-9]*$/)] ],
      cel:[null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)] ],
      email:[null, [Validators.required, Validators.pattern(/(^[\w\d-!#$%&'*+/=?^`{|}]+(\.[\w\d-!#$%&'*+/=?^`{|}]+)*@[\w\d {\/\-\}]+(\.[\w\d-]+)*(\.[a-z]{2,3})$)/)	]],
      postalCode:[null, [Validators.required, Validators.minLength(4), Validators.pattern(/^[0-9]*$/)] ], 
      delegation:[null,[Validators.required, Validators.minLength(4), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)]],
      colony:[null, [Validators.required, Validators.minLength(4), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)]],
      street:[null, [Validators.required, Validators.minLength(4), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)]],
      tipePersons:[null, [Validators.required, Validators.minLength(4), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)]],
      degree:[null, [Validators.required]],
      tuition:[null, [Validators.required, Validators.minLength(4), Validators.pattern(/^[0-9]*$/) ]]

    });
  }
 submit() {
   /*
   if (!this.studentsForm.valid) {
     return;
   }
   console.log(this.studentsForm.value);
   */
  Swal.fire({
    title: 'esta seguro eliminar el elñemento?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si!'
  }).then((result) => {
    if (result.value) {
      
    } else {
      console.log(' No lo deseo eliminar');
    }
  })

 
} 
}
