import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/user/login/login.component';
import { HomeComponent } from 'src/app/user/home/home.component';

const routes: Routes = [
  {  path: 'login', component: LoginComponent },
  {  path: 'home', component: HomeComponent },
  {  path: '',   redirectTo: 'login', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
