import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Regex from '@constant/regex';
import { UserAccount } from '@services/account.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.sass']
})
export class ResetPasswordComponent implements OnInit {

  private userForm: FormGroup;

  constructor(
    private userGorup: FormBuilder,
    private _service: UserAccount
  ) { }

  ngOnInit() {
    this.validations();
  }

  save() {

  }

  validations() {

    this.userForm = this.userGorup.group({
      currentpassword: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25),
        Validators.pattern(Regex.name)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
        Validators.pattern(Regex.name)
      ]],
      confirmpassword: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
        Validators.pattern(Regex.name)
      ]]
    });
  }

}

