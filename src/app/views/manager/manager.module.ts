import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerComponent } from './manager.component';
import { BooksAllComponent } from './books-all/books-all.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from 'src/app/core/interceptors/error.service';
import { UserComponent } from './user/user.component';
@NgModule({
  declarations: [
    DashboardComponent,
    ManagerComponent,
    BooksAllComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManagerModule { }
