import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: './request-info/login/login.module#LoginModule'
  },
  {
    path: 'home',
    loadChildren: './request-info/home/home.module#HomeModule'
  },
  {
    path: '',
    redirectTo: 'login', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
