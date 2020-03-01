import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './user/home/home.component';


const routes: Routes = [
 {  path: 'login', component: LoginComponent },
 {  path: 'home', component: HomeComponent },
  {  path: 'login',   redirectTo: '', pathMatch: 'full' },
 /* 
  {
    path: 'login',
    //loadChildren: './core/login-module/login.module#LoginModule'
    loadChildren: () => import('./core/login-module/login.module').then(m => m.LoginModule)
  },
  */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
