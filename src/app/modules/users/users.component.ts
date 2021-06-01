import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserAccount } from '@services/account.service';
import { Alert } from 'src/app/shared/utils/alerts';
import * as Regex from 'src/app/shared/utils/regex';
import { MESSAGE } from '@utils/catalog-alert';
import { TYPE_ALERT } from '@utils/catalog-alert';
import { UserAdapter } from '../../shared/domain/user-adapter';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class StudentsComponent implements OnInit {

  private userForm : FormGroup;

  constructor(
    private userGorup: FormBuilder,
    private _service: UserAccount
  ) { }

  ngOnInit() {
    this.validations();
  }

  save () {

    this._service.create(new UserAdapter(this.userForm.value)).subscribe(
      response =>{
        Alert.msgTimer(TYPE_ALERT.SUCCESS, MESSAGE.ADD)
        this.reset();
      },
      error => {
        Alert.msgTimer(TYPE_ALERT.WARNING, MESSAGE.FAILED)
      }
    )
  }

  reset() {
    this.userForm.reset('');
    Object.keys(this.userForm.controls).forEach(key => {
      this.userForm.controls[key].setErrors(null);
    });
    this.userForm.setErrors({"required":true})
  }

  validations() {

    this.userForm = this.userGorup.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25),
        Validators.pattern(Regex.name)
      ]],
      surname: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
        Validators.pattern(Regex.name)
      ]],
      mothersuname: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
        Validators.pattern(Regex.name)
      ]],
      sex: ['', [
        Validators.required
      ]],
      cel: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(Regex.numeric)
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern(Regex.email)
      ]],
      password: ['', [
        Validators.required,
        // Validators.pattern(Regex.name)
      ]],
      role: ['MANAGER', [
        Validators.required,
        // Validators.pattern(Regex.name)
      ]]
    });
  }
}
