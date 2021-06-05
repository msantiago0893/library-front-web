import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAccount } from 'src/app/core/services/account.service';
import { UserAdapter } from 'src/app/shared/models/user-adapter';

import * as Regex from '@constant/regex';
import { MESSAGE, TYPE_ALERT } from '@constant/catalog-alert';
import { Alert } from '@utils/alerts';

@Component({
  selector: 'app-prv-users',
  templateUrl: './prv-users.component.html',
  styleUrls: ['./prv-users.component.sass']
})

export class PrvUsersComponent implements OnInit {

  private userForm : FormGroup;

  constructor(
    private userGorup: FormBuilder,
    private _service: UserAccount
  ) { }

  ngOnInit() {
    this.validations();
  }

  save () {

    this._service.add(new UserAdapter(this.userForm.value)).subscribe(
      response =>{
        Alert.msgTimer(TYPE_ALERT.SUCCESS, MESSAGE.ADD)
        this.reset();
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
      sex: ['H', [
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
        // Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)
      ]],
      role: ['MANAGER', [
        Validators.required,
        // Validators.pattern(/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ ]*$/)
      ]]
    });
  }
}
