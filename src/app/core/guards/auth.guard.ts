import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from 'src/app/memento/Storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private route: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot
  ): Observable<boolean> |Promise<boolean> | boolean  {

      console.log('RUTA PRINCIPAL HOME');

      const user = Storage.getItem('user');

      const roles = next.data.roles;

      if(user) {

        if(roles.includes(user.role)) { // Aqui estare validando el token si es correcto

          return true;
        } else  {

          Storage.clear();
        }
      }

      this.route.navigateByUrl('/auth');
      return false;
  }


  isManager(rol: String) {
    return  rol === "MANAGER";
  }

}
