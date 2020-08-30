/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './shared/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { StudentsComponent } from './pages/students/students.component';
import { AllBooksComponent } from './pages/all-books/all-books.component';

import { HttpClientModule } from '@angular/common/http'
import { StudentsConsultComponent } from './pages/students-consult/students-consult.component';
import { EducationalStaffComponent } from './pages/educational-staff/educational-staff.component';
import { EducationalStaffConsultComponent } from './pages/educational-staff-consult/educational-staff-consult.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BooksComponent,
    StudentsComponent,
    AllBooksComponent,
    StudentsConsultComponent,
    EducationalStaffComponent,
    EducationalStaffConsultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,

    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
