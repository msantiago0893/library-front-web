import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'signin', component: LoginComponent },
      { path: 'signup', component: RegistryComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: '**', redirectTo:'signin' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule]
})
export class AuthRoutingModule { }
