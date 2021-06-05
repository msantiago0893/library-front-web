import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    ConfiguracionComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
