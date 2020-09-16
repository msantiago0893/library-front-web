import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EducationalStaffServiceService } from 'src/app/shared/services/educational-staff-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educational-staff',
  templateUrl: './educational-staff.component.html',
  styleUrls: ['./educational-staff.component.sass']
})
export class EducationalStaffComponent implements OnInit {

  private educationalForm : FormGroup;
  
  constructor(
    private educational: FormBuilder,
    private service: EducationalStaffServiceService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.validateForm();
   
  }
  
validateForm(){
  this.educationalForm = this.educational.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40),Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)]],
    surname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40),Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)]],
    mothersuname: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(40), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/) ]],
    cel:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern(/^[0-9]*$/) ]],
    email:[null,[Validators.required, Validators.pattern(/(^[\w\d-!#$%&'*+/=?^`{|}]+(\.[\w\d-!#$%&'*+/=?^`{|}]+)*@[\w\d {\/\-\}]+(\.[\w\d-]+)*(\.[a-z]{2,3})$)/)]],
    sex:[null, [Validators.required, Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)]],
    postalCode:['', [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern(/^[0-9]*$/) ]],
    delegation:['', [Validators.required, Validators.minLength(5), Validators.maxLength(40), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)]],
    colony:['', [Validators.required, Validators.minLength(5), Validators.maxLength(40), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/) ]],
    street:['', [Validators.required, Validators.minLength(5), Validators.maxLength(40), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)]],
    typePerson:['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)]],
    degree:['', [Validators.required, Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)]],
    clave:['', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern(/^[0-9]*$/)]],

  });
 }
save() {

  //if (0) {
  //  return ;
  //}

  
  this.service.create(this.educationalForm.value)
              .subscribe(
                (Response)=> {
              console.log('El elemento fue creado correctamente');
                }
                );
};

testRouter() {
  this.router.navigate(['/educational-staff/educational-staff-consult']);
}


}
