import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavListComponent } from './nav-list/nav-list.component';


@NgModule({
  declarations: [NavListComponent],
  imports: [
    CommonModule,
    NavbarRoutingModule
  ]
})
export class NavbarModule { }
