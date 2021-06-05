import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { ErrorService } from '@services/error.service';
import { ACL } from 'src/app/security/acl';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  private authForm : FormGroup;
  areWrongCredentials = false;

  constructor(
    private authGroup: FormBuilder,
    private _authService : AuthService,
    private route: Router,
    private _service: ErrorService
  ) { }

  ngOnInit() {
    this.validations();
  }

  onLogin() {

    this._authService.login(this.authForm.value)
                      .subscribe(response => {

                        if(response) {
                          this.route.navigateByUrl(ACL.getDefaultRedirectPath());
                          this._service.isLoader(true);
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
