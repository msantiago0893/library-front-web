import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAdapter } from '../../shared/domain/user-adapter';
import { UserAccount } from '@services/account.service';
import * as Regex from '@utils/regex';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.sass']
})
export class RegistryComponent implements OnInit {

  private registryForm : FormGroup;

  isSuccess: Boolean = false;

  constructor(
    private registryGroup: FormBuilder,
    private _service : UserAccount
  ) { }

  ngOnInit() {

    this.validations();
    this.registryForm.patchValue(
      {
        dni: "SAFM931208",
        name: "Marco Antonio",
        surname: "Santiago",
        mothersuname: "Feria",
        sex: "M",
        cel: "5544332211",
        email: "msantiago@linko.mx",
        password: "12345",
        postalCode: "01857",
        city: "CDMX",
        delegation: "Alvaro Obregón",
        colony: "Lomas de Chamontoya",
        street: "CD Jesús María",
        numInt: "21",
        numExt: "12"
      }
    );
  }

  save() {

    this._service.create(new UserAdapter(this.registryForm.value))
                  .subscribe(
                    response => {

                      this.isSuccess = !this.isSuccess;

                      setTimeout(() => {
                        this.isSuccess = !this.isSuccess;
                        this.reset();
                      },3000);
                  });
  }

  reset() {

    this.registryForm.reset('');

    Object.keys(this.registryForm.controls).forEach(key => {
      this.registryForm.controls[key].setErrors(null);
    });

    this.registryForm.setErrors({"required":true});
  }

  validations() {

    this.registryForm = this.registryGroup.group({
      dni: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
        Validators.pattern(Regex.alfanumerico)
      ]],
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
      postalCode: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
        Validators.pattern(Regex.numeric)
      ]],
      city: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
        Validators.pattern(Regex.name)
      ]],
      delegation: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
        Validators.pattern(Regex.name)
      ]],
      colony: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
        Validators.pattern(Regex.name)
      ]],
      street: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
        Validators.pattern(Regex.name)
      ]],
      numInt: ['', [
        Validators.minLength(1),
        Validators.maxLength(2),
        Validators.pattern(Regex.numeric)
      ]],
      numExt: ['', [
        Validators.minLength(1),
        Validators.maxLength(2),
        Validators.pattern(Regex.numeric)
      ]],
    });
  }
}
