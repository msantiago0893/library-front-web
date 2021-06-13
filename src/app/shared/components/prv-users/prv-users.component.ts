import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAccount } from 'src/app/core/services/account.service';
import { UserAdapter } from 'src/app/shared/models/user-adapter';

import * as Regex from '@constant/regex';
import { MESSAGE, TYPE_ALERT } from '@constant/catalog-alert';
import { Alert } from '@utils/alerts';
import { NUMERIC } from '@enums/numeric';

@Component({
  selector: 'app-prv-users',
  templateUrl: './prv-users.component.html',
  styleUrls: ['./prv-users.component.sass']
})

export class PrvUsersComponent implements OnInit {

  private userForm: FormGroup;
  catalogNumber = NUMERIC;
  @Input() user: any;
  @Output() back = new EventEmitter<Number>();
  @Output() update = new EventEmitter<Boolean>();
  id: Number;

  constructor(
    private userGorup: FormBuilder,
    private _service: UserAccount
  ) {
  }

  ngOnInit() {
    this.validations();

    if (this.user) {
      this.userForm.patchValue(this.user);
    }

  }

  goBack() {
    this.back.emit(this.catalogNumber.ONE);
  }

  save() {
    if (this.user) {
      this._service.update(this.user.id, this.userForm.value)
        .subscribe( () => {
          this.reset();
          this.update.emit(true);
        },
        );
    } else {
      this._service.add(new UserAdapter(this.userForm.value)).subscribe(
        () => {

          this.update.emit(true);
          this.reset();

        },
      );
    }
  }

  reset() {
    this.userForm.reset('');
    Object.keys(this.userForm.controls).forEach(key => {
      this.userForm.controls[key].setErrors(null);
    });
    this.userForm.setErrors({ "required": true })
  }

  validations() {

    this.userForm = this.userGorup.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25),
        Validators.pattern(Regex.name)
      ]],
      firstname: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
        Validators.pattern(Regex.name)
      ]],
      secondname: ['', [
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
        // this.user ? undefined: Validators.required,
      ]],
      role: ['MANAGER', [
        Validators.required,
      ]]
    });
  }
}
