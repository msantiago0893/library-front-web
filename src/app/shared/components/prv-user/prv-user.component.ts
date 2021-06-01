import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAccount } from '@services/account.service';
import { Alert } from '@utils/alerts';
import { TYPE_ALERT } from '@utils/catalog-alert';
import { UserAdapter } from '../../domain/user-adapter';
import { MESSAGE } from '@utils/catalog-alert';
import * as Regex from 'src/app/shared/utils/regex';

@Component({
  selector: 'app-prv-user',
  templateUrl: './prv-user.component.html',
  styleUrls: ['./prv-user.component.sass']
})
export class PrvUserComponent implements OnInit {

  @Input("user") data: any;
  @Output() backList = new EventEmitter<number>();

  private userForm : FormGroup;

  constructor(
    private userGorup: FormBuilder,
    private _service: UserAccount
  ) { }

  ngOnInit() {
    this.validations();

    if(this.data){
      this.userForm.patchValue(this.data);
    }
  }

  back() {
    this.backList.emit(1);
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
