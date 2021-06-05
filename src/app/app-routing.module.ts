import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ACL } from './security/acl';


const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch:'full'
  },
  {
    path:'auth',
    loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: ACL.getDefaultRedirectPath(), pathMatch: 'full'
      },
      {
        path:'manager',
        loadChildren: () => import('./views/manager/manager.module').then(m => m.ManagerModule)
      },
      {
        path:'customer',
        loadChildren: () => import('./views/customer/customer.module').then(m => m.CustomerModule)
      }
    ]
  },
  {
    path:'**', redirectTo: ''
  }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})], //el preload acelera la carga diferida(lazy loading)

  exports: [RouterModule]
})
export class AppRoutingModule { }
