import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentsServiceService } from 'src/app/shared/services/students-service.service';
import { Router } from '@angular/router';
import { Alert } from 'src/app/utils/alerts';

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
  }

  validateForm() {
    this.studentsForm = this.students.group({
      name:['', [Validators.required, Validators.minLength(3), Validators.maxLength(40), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/) ] ],
      surname:['', [Validators.required, Validators.minLength(4), Validators.maxLength(40), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)] ],
      mothersuname:[null, [Validators.required, Validators.minLength(4), Validators.maxLength(40),  Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)] ],
      sex:['M', [Validators.required, Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)] ],
      cel:[null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)] ],
      email:[null, [Validators.required, Validators.pattern(/(^[\w\d-!#$%&'*+/=?^`{|}]+(\.[\w\d-!#$%&'*+/=?^`{|}]+)*@[\w\d {\/\-\}]+(\.[\w\d-]+)*(\.[a-z]{2,3})$)/)	]],
      postalCode:[null, [Validators.required, Validators.minLength(4), Validators.maxLength(5), Validators.pattern(/^[0-9]*$/)] ], 
      delegation:[null,[Validators.required, Validators.minLength(4), Validators.maxLength(40), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)]],
      colony:[null, [Validators.required, Validators.minLength(4), Validators.maxLength(50), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)]],
      street:[null, [Validators.required, Validators.minLength(4), Validators.maxLength(40), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)]],
      typePerson:['', [Validators.required, Validators.minLength(4), Validators.maxLength(40), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)]],
      degree:['ISC', [Validators.required]],
      clave:[null, [Validators.required, Validators.minLength(4), Validators.pattern(/^[0-9]*$/) ]]

    });
  }
 save() {

  this.alerta();
   
    console.log('form ',this.studentsForm.value );

    //if (!this.studentsForm.valid) {
   //    return;
    //}


    this.service.createStudents(this.studentsForm.value).subscribe();
    //this.studentsForm.reset();


  }

  alerta() {
    //this.alert.msgTimer('success','title','hola mundo');
    //this.alert.msg('error','prueba');
    this.alert.questions('Esta seguro eliminar este elemento?').then((result) => {
      if (result.value) {
        
        this.alert.msgTimer('success','El elemento ha sico eliminado');
      }
    });
  }

  clear() {
    this.studentsForm.reset();
    this.inicializarFormGroup();
  }

  inicializarFormGroup() {
    this.studentsForm.setValue({
      name : '',
      surname : '',
      mothersuname : '',
      sex: '',
      cel: '',
      email: '',
      postalCode: '',
      delegation:'',
      colony:'',
      street:'',
      tipePersons:'',
      degree:'',
      tuition:''
    });
  }

  testRouter() {
    this.router.navigate(['/students/students-consult'])
  }
}
