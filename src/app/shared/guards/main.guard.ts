import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@services/auth.service';

import { Storage } from '../memento/Storage'

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private route: Router
  ) {}

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Promise<boolean> | Observable<boolean> | boolean {

      const user = Storage.getItem('user');

      if(user && this.isRoleCorrect(user.role)) {

        return this.route.navigate(['/home/manager']).then(() => false);
      } else {

        this.route.navigateByUrl('/signin');
      }

      return false;
    }
  // route.data.includes(user.role);

  isRoleCorrect(rol): any{

    return ['MANAGER','CLIENT'].includes(rol);
  }
}
