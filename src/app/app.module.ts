import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatPaginatorIntl, MAT_DATE_LOCALE} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './core/interceptors/error.service';
import { LoaderInterceptor } from './core/interceptors/interceptor-loader';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { SpinnerSectionService } from '@services/spinner-section.service';
import { PaginatorIntl } from './shared/angular-material/PaginatorIntl';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [
    HttpClientModule,
  ],
  providers: [
    SpinnerSectionService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, // format date input datepicker
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: MatPaginatorIntl, useClass: PaginatorIntl } //Cambia labels de mat-paginator
  ],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
