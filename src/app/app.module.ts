/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MenuComponent } from '@layout/menu/menu.component';
import { HeaderComponent } from '@layout/header/header.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { HomeComponent } from '@layout/home/home.component';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { BooksComponent } from '@modules/books/books.component';
import { StudentsComponent } from '@modules/users/users.component';
import { AllBooksComponent } from '@modules/books-all/books-all.component';
import { StudentsConsultComponent } from '@modules/users-all/users-all.component';
import { DashboardComponent } from '@modules/dashboard/dashboard.component';
import { StudentTestComponent } from '@modules/student-test/student-test.component';
import { CatalogsComponent } from '@modules/catalogs/catalogs.component';

import { HttpClient, HttpClientModule } from '@angular/common/http'

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import * as fromComponents from './shared/components'


export function httpTranslateLoader(http: HttpClient) {
   //return new TranslateHttpLoader(http, 'local/i18n/', '.json');
  return new TranslateHttpLoader(http); 
}

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
    DashboardComponent,
    StudentTestComponent,
    CatalogsComponent,
    ...fromComponents.components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }