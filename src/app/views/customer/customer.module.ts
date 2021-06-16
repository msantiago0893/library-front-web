import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CustomerComponent } from './customer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    ConfiguracionComponent,
    GalleryComponent,
    CustomerComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ],
  exports: [
    // AngularMaterialModule
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomerModule { }
