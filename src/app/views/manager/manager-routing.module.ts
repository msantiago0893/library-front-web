import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrvBookComponent } from '@components/prv-book/prv-book.component';
import { PrvUsersComponent } from '@components/prv-users/prv-users.component';
import { ACL } from 'src/app/security/acl';
import { BooksAllComponent } from './books-all/books-all.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerComponent } from './manager.component';


const routes: Routes = [
  {
    // path: '',
    path: '', component: ManagerComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: PrvUsersComponent },
      { path: 'add-book', component: PrvBookComponent },
      { path: 'all-books', component: BooksAllComponent },
      { path: '**', redirectTo:'dashboard' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] //si no coloco esto, no me funciona las rutas
})
export class ManagerRoutingModule { }
