import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from 'src/app/memento/Storage';

@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {

  constructor(
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean> |Promise<boolean> | boolean  {

      const authorities = route.data.authorities;

      const user = Storage.getItem('user') || '';

      if(authorities.includes(user.authority)) {
        return true;
      }

      this.router.navigateByUrl('');
      return false;
  }

}
