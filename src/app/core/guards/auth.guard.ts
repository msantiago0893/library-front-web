import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, CanLoad } from '@angular/router';
import { SessionService } from '@services/session.service';
import { Observable } from 'rxjs';
import { Storage } from 'src/app/memento/Storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private route: Router,
    private _sessionService: SessionService,
  ) {}
  canLoad(): boolean | Observable<boolean> | Promise<boolean> {

    if(!this.hasActiveUser()) {
      return true;
    }

    this.route.navigateByUrl('/');
    return false;
  }

  canActivate(
    next: ActivatedRouteSnapshot
  ): Observable<boolean> |Promise<boolean> | boolean  {

      const authorities = next.data.authorities;

      if(this.hasActiveUser()) {

        if(this.isTokenValid() && authorities.includes(this.hasActiveUser().authority)) {

          return true;
        } else  {

          Storage.clear();
        }
      }

      this.route.navigateByUrl('/auth');
      return false;
  }

  hasActiveUser() {
    return Storage.getItem('user');
  }

  isTokenValid() {

    const token = Storage.getItem('token');

    return JSON.stringify(this._sessionService.infoUser(token)) === JSON.stringify(this.hasActiveUser());
  }
}
