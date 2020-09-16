import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentsServiceService } from 'src/app/shared/services/students-service.service';
import { Router } from '@angular/router';
import { Alert } from 'src/app/utils/alerts';

const  QUESTIONS = 'Esta seguro eliminar este elemento?';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.sass']
})
export class StudentsComponent implements OnInit {

  private studentsForm : FormGroup;
  private alert: Alert = new Alert();
  
  constructor(
    private students: FormBuilder,
    private service: StudentsServiceService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.validateForm();

    this.studentsForm.setValue({
      name: 'ADMIN',
      surname: 'ADMIN',
      mothersuname: null,
      sex: 'F',
      cel: 'ADMIN',
      email: null,
      postalCode: null,
      delegation: 'ADMIN',
      colony: 'ADMIN',
      street: 'ADMIN',
      typePerson: 'ADMIN',
      degree: 'ADMIN',
      clave: 'ADMIN'
    });
  }

  validateForm() {
    this.studentsForm = this.students.group({
      name:['', [Validators.required, Validators.minLength(3), Validators.maxLength(40), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/) ] ],
      surname:['', [Validators.required, Validators.minLength(4), Validators.maxLength(40), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)] ],
      mothersuname:[null, [Validators.required, Validators.minLength(4), Validators.maxLength(40),  Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)] ],
      sex:['', [Validators.required] ],
      cel:[null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)] ],
      email:[null, [Validators.required, Validators.pattern(/(^[\w\d-!#$%&'*+/=?^`{|}]+(\.[\w\d-!#$%&'*+/=?^`{|}]+)*@[\w\d {\/\-\}]+(\.[\w\d-]+)*(\.[a-z]{2,3})$)/)	]],
      postalCode:[null, [Validators.required, Validators.minLength(4), Validators.maxLength(5), Validators.pattern(/^[0-9]*$/)] ], 
      delegation:[null,[Validators.required, Validators.minLength(4), Validators.maxLength(40), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)]],
      colony:[null, [Validators.required, Validators.minLength(4), Validators.maxLength(50), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)]],
      street:[null, [Validators.required, Validators.minLength(4), Validators.maxLength(40), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)]],
      typePerson:['', [Validators.required, Validators.minLength(4), Validators.maxLength(40), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)]],
      degree:['', [Validators.required]],
      clave:[null, [Validators.required, Validators.minLength(4), Validators.pattern(/^[0-9]*$/) ]]

    });
  }
 save() {

  this.alerta();

  this.studentsForm.patchValue({
    typePerson: 'ADMIN'
  });
    console.log('form ',this.studentsForm.value );

    if (!this.studentsForm.valid) {
       return;
    }


    this.service.createStudents(this.studentsForm.value)
                .subscribe(
                  (Response) => {
                    console.log('Se ha creado el elemento correctamente');
                  }
                );
    //this.studentsForm.reset();
  }

  alerta() {
    //this.alert.msgTimer('success','title','hola mundo');
    //this.alert.msg('error','prueba');
    this.alert.questions(QUESTIONS).then((result) => {
      if (result.value) {
        
        this.alert.msgTimer('success','El elemento ha sico eliminado');
      }
    });
  }

  testRouter() {
    this.router.navigate(['/students/students-consult'])
  }
}
