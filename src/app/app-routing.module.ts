import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './shared/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { AllBooksComponent } from './pages/all-books/all-books.component';


const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,  pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'add-book', component: BooksComponent},
      { path: 'all-book', component: AllBooksComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
