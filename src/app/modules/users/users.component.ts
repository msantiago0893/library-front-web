import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserAccount } from '@services/account.service';
import { Alert } from '@utils/alerts';
import * as Regex from '@utils/regex';
import { PersonaAdapter } from './domain/persona-adapter';
import { MESSAGE } from '@utils/catalog-alert';
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

  save() {

    this._service.create(new UserAdapter(this.userForm.value))
                  .subscribe(
                    response => {
                      Alert.msgTimer('success', MESSAGE.ADD);
                  });
  }

  reset() {

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
