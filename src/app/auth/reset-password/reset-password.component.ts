import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Regex from '@utils/regex';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.sass']
})
export class ResetPasswordComponent implements OnInit {

  isSuccess: Boolean = false;

  resetForm : FormGroup;

  constructor(
    private resetGroup: FormBuilder,
  ) { }

  ngOnInit() {
    this.validations();
  }

  save() {

  }

  validations() {

    this.resetForm = this.resetGroup.group({
      password: ['', [
        Validators.required,
        Validators.pattern(Regex.name)
      ]],
      confirmPassword: ['', [
        Validators.required,
        Validators.pattern(Regex.name)
      ]]
    });
  }
}
