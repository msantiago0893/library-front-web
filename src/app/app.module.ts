import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeUIComponent } from './home-ui/home-ui.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { RegisterBookComponent } from './register-book/register-book.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';

//import { FooterComponent } from './footer.component';
//import { HeaderComponent } from './header.component';
//import { NavListComponent } from './nav-list/nav-list.component';
//import { NavListComponent } from './nav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthenticationComponent,
    HomeUIComponent,
    ViewBooksComponent,
    RegisterBookComponent,
    DashboardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
