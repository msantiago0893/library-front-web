import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from '@layout/home/home.component';
import { BooksComponent } from '@modules/books/books.component';
import { AllBooksComponent } from '@modules/books-all/books-all.component';
import { StudentsComponent} from '@modules/users/users.component';
import { StudentsConsultComponent } from '@modules/users-all/users-all.component';
import { DashboardComponent } from '@modules/dashboard/dashboard.component';
import { StudentTestComponent } from '@modules/student-test/student-test.component';
import { CatalogsComponent } from '@modules/catalogs/catalogs.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,  pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'test', component: StudentTestComponent},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'add-book', component: BooksComponent},
      { path: 'all-book', component: AllBooksComponent},
      { path: 'students', component: StudentsComponent},
      { path: 'students-consult', component: StudentsConsultComponent},
      { path: 'catalog', component: CatalogsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
