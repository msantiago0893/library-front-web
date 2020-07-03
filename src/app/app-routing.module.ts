import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeUIComponent } from './home-ui/home-ui.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { RegisterBookComponent } from './register-book/register-book.component';
import { LoanRegistrationComponent } from './loan-registration/loan-registration.component';
import { registerLocaleData } from '@angular/common';
import { Vinculo1Component } from './vinculo1/vinculo1.component';
import { Vinculo2Component } from './vinculo2/vinculo2.component';
import { Vinculo3Component } from './vinculo3/vinculo3.component';
import { PageGridComponent } from './page-grid/page-grid.component';
import { MygridComponent } from './mygrid/mygrid.component';

const routes: Routes = [

  {
    path: 'grid', component: PageGridComponent
  },
  {
    path: 'mygrid', component: MygridComponent
  },


  {
    path: 'login', component: AuthenticationComponent
  },
  {
    path: 'home', component: HomeUIComponent,
    children: [
      { path: 'registerBook', component: RegisterBookComponent},
      { path: 'viewBooks', component: ViewBooksComponent},
      {path: 'load-regidtration' , component: LoanRegistrationComponent},
      {path: 'vincule1', component: Vinculo1Component},
      {path: 'vincule2', component: Vinculo2Component},
      {path: 'vincule3', component: Vinculo3Component}

    ]
  },
  {
    path: '',
    redirectTo: 'mygrid',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
