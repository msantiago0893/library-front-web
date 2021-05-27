import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@services/auth.service';

import { Storage } from '../memento/Storage'
import { ACL } from '../security/acl';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanActivateChild {

  constructor(
    private _authService: AuthService,
    private route: Router
  ) {}

    canActivate(routeActivated: ActivatedRouteSnapshot): Observable<boolean> | boolean {

      // const rolRoute = routeActivated.data.roles;
      const user = Storage.getItem('user');

      if (user) {
        if (routeActivated.data.authorize.includes(user.role)) {
          return true;
        }
      }

      this.route.navigateByUrl('/signin');
      return false;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      console.log('childRoute ', childRoute);
      console.log('state ', state);

      // const user = Storage.getItem('user');

      // if (user) {

      //   if (state.url.includes("/customer") && childRoute.data.authorize.includes(user.role)) {
      //     this.route.navigateByUrl('/home/customer');
      //     return false;
      //   }
      //   if (state.url.includes("/manager") && childRoute.data.authorize.includes(user.role)) {
      //     this.route.navigateByUrl('/home/maanger');
      //     return false;
      //   }
      // }

      // this.route.navigateByUrl('/home');
      return false;
    }


}
