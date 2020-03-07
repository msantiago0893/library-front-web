import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeUIComponent } from './home-ui/home-ui.component';
import { DashboardViewComponent } from '../dashboard/dashboard-view/dashboard-view.component';
import { RegisterBookComponent } from '../books/register-book/register-book.component';
import { ViewBooksComponent } from '../books/view-books/view-books.component';


const routes: Routes = [
  {
    path: '', component: HomeUIComponent,
    children: [
      { path: 'dashboard', component: DashboardViewComponent},
      { path: 'registerBook', component: RegisterBookComponent},
      { path: 'viewBooks', component: ViewBooksComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
