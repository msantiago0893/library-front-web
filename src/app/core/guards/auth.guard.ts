import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from 'src/app/memento/Storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private route: Router
  ) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> | Promise<boolean> {

    if(!this.isExistSession()) {
      return true;
    }

    this.route.navigateByUrl('/');
    return false;
  }

  canActivate(
    next: ActivatedRouteSnapshot
  ): Observable<boolean> |Promise<boolean> | boolean  {

      const user = Storage.getItem('user');
      const roles = next.data.roles;

      if(this.isExistSession()) {

        if(roles.includes(user.role)) { // Aqui estare validando el token si es correcto

          return true;
        } else  {

          Storage.clear();
        }
      }

      this.route.navigateByUrl('/auth');
      return false;
  }

  isExistSession() {

    return Storage.getItem('user')
  }

}
