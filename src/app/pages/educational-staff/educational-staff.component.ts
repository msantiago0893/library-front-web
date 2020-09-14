import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-educational-staff',
  templateUrl: './educational-staff.component.html',
  styleUrls: ['./educational-staff.component.sass']
})
export class EducationalStaffComponent implements OnInit {

  private educationalForm : FormGroup;
  
  constructor(
    private educational: FormBuilder,
  ) {}

  ngOnInit() {
    this.educationalForm = this.educational.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40),Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)]],
      surname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40),Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)]],
      mothersuname: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(40), Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/) ]],
      cel:[null, [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern(/^[0-9]*$/) ]],
    });
  }

  save() {
    
  }

}
