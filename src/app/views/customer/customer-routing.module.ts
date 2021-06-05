import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { GalleryComponent } from './gallery/gallery.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'configuracion', component: ConfiguracionComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: '**', redirectTo:'configuracion' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule]
})
export class CustomerRoutingModule { }
