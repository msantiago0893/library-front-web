import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegistryComponent } from './registry/registry.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    RegistryComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMaterialModule,
    FormsModule, // Formulario
    ReactiveFormsModule, // formulario
  ]
})
export class AuthModule { }
