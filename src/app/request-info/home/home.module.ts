import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeUIComponent } from './home-ui/home-ui.component';
import { DashboardViewComponent } from '../dashboard/dashboard-view/dashboard-view.component';
import { ViewBooksComponent } from '../books/view-books/view-books.component';
import { RegisterBookComponent } from '../books/register-book/register-book.component';

@NgModule({
  declarations: [
    HomeUIComponent,
    DashboardViewComponent,
    ViewBooksComponent,
    RegisterBookComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
