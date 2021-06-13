import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { CustomerComponent } from './customer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: '', component: CustomerComponent,
    children: [
      { path: 'main', component: MainComponent },
      { path: 'configuracion', component: ConfiguracionComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: '**', redirectTo:'main' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
