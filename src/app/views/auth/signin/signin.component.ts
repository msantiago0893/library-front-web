import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { ErrorService } from '@services/error.service';
import { ACL } from 'src/app/security/acl';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  private authForm : FormGroup;
  areWrongCredentials = false;

  constructor(
    private authGroup: FormBuilder,
    private _authService : AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.validations();
  }

  onLogin() {

    this._authService.login(this.authForm.value)
                      .subscribe(response => {

                        if(response) {

                          location.reload();
                        } else {

                          this.areWrongCredentials = !response;

                          setTimeout(() => {
                            this.areWrongCredentials = response;
                          }, 1500);
                        }
                      });
  }

  validations() {

    this.authForm = this.authGroup.group({
      email: ['', [
        Validators.required,
        // Validators.pattern(Regex.email)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(2000),
        // Validators.pattern(Regex.alfanumerico)
      ]]
    });
  }

}
