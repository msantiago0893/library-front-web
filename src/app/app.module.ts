import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeUIComponent } from './home-ui/home-ui.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { RegisterBookComponent } from './register-book/register-book.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { LoanRegistrationComponent } from './loan-registration/loan-registration.component';
import { Vinculo1Component } from './vinculo1/vinculo1.component';
import { Vinculo2Component } from './vinculo2/vinculo2.component';
import { Vinculo3Component } from './vinculo3/vinculo3.component';
import { PageGridComponent } from './page-grid/page-grid.component';
import { MygridComponent } from './mygrid/mygrid.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthenticationComponent,
    HomeUIComponent,
    ViewBooksComponent,
    RegisterBookComponent,
    UserRegisterComponent,
    LoanRegistrationComponent,
    Vinculo1Component,
    Vinculo2Component,
    Vinculo3Component,
    PageGridComponent,
    MygridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
