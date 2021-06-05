import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { ManagerRoutingModule } from './manager-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
// import { UsersComponent } from '../../shared/components/users/users.component';
import { ManagerComponent } from './manager.component';
import { BooksAllComponent } from './books-all/books-all.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from 'src/app/core/interceptors/error.service';

@NgModule({
  declarations: [
    DashboardComponent,
    // UsersComponent,
    ManagerComponent,
    BooksAllComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedModule,
    // AngularMaterialModule,
    // FormsModule, // Formulario
    // ReactiveFormsModule, // formulario
  ],
  exports: [
    AngularMaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManagerModule { }
