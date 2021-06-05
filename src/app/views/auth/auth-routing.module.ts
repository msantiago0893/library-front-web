import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registry', component: RegistryComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: '**', redirectTo:'login' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule]
})
export class AuthRoutingModule { }
