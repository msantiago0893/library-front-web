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
import { CustomerComponent } from './views/customer/customer.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { AnimalesComponent } from '@modules/animales/animales.component';
import { CreateanimalesComponent } from '@modules/createanimales/createanimales.component';
import { RegistryComponent } from './auth/registry/registry.component';
import { CalculadoraComponent } from './auth/calculadora/calculadora.component';

import { AuthGuard } from '@guards/auth.guard'

const routes: Routes = [

  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: LoginComponent,  pathMatch: 'full'},
  { path: 'signup', component: RegistryComponent},
  { path: 'calculadora', component: CalculadoraComponent},
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'test', component: StudentTestComponent},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'add-book', component: BooksComponent},
      { path: 'all-book', component: AllBooksComponent},
      { path: 'edit-book/:id', component:BooksComponent},
      { path: 'students', component: StudentsComponent},
      { path: 'students-consult', component: StudentsConsultComponent},
      { path: 'catalog', component: CatalogsComponent},
      { path: 'animales', component: AnimalesComponent},
      { path: 'edit-animales/:id', component: CreateanimalesComponent},
      { path: 'createanimales', component:CreateanimalesComponent},
    ]
  },
  {
    path: 'customer', component: CustomerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'gallery', component: GalleryComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
