import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '', component: ProfileComponent,
    children: [
      { path: 'contact', component: ContactComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
      { path: '**', redirectTo:'contact' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
