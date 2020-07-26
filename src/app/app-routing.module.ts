import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeUIComponent } from './home-ui/home-ui.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { RegisterBookComponent } from './register-book/register-book.component';
import { LoanRegistrationComponent } from './loan-registration/loan-registration.component';

const routes: Routes = [

  {
    path: 'login', component: AuthenticationComponent
  },
  {
    path: 'home', component: HomeUIComponent,
    children: [
      { path: 'registerBook', component: RegisterBookComponent},
      { path: 'viewBooks', component: ViewBooksComponent},
      {path: 'load-regidtration' , component: LoanRegistrationComponent}
    ]
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
