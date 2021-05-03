/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
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

import * as fromComponents from './shared/components';
import { CustomerComponent } from './views/customer/customer.component';
import { ManagerComponent } from './views/manager/manager.component';
import { GalleryComponent } from './views/gallery/gallery.component'
import { AnimalesComponent } from './modules/animales/animales.component';
import { CreateanimalesComponent } from './modules/createanimales/createanimales.component';
import { RegistryComponent } from './auth/registry/registry.component';
import { CalculadoraComponent } from './auth/calculadora/calculadora.component'


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
    HomeComponent,
    BooksComponent,
    StudentsComponent,
    AllBooksComponent,
    StudentsConsultComponent,
    DashboardComponent,
    StudentTestComponent,
    CatalogsComponent,
    ...fromComponents.components,
    CustomerComponent,
    ManagerComponent,
    GalleryComponent,
    AnimalesComponent,
    CreateanimalesComponent,
    RegistryComponent,
    CalculadoraComponent,
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