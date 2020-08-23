import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './shared/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { AllBooksComponent } from './pages/all-books/all-books.component';
import { StudentsComponent} from './pages/students/students.component';
import { StudentsConsultComponent } from './pages/students-consult/students-consult.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,  pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'add-book', component: BooksComponent},
      { path: 'all-book', component: AllBooksComponent},
      { path: 'students', component: StudentsComponent},
      { path: 'students-consult', component: StudentsConsultComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
