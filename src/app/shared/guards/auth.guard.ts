import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@services/auth.service';

import { Storage } from '../memento/Storage'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private route: Router
  ) {}

  canActivate(): Observable<boolean> | boolean {

    const user = Storage.getItem('user');

    if (user) {
      return true;
    }

    this.route.navigateByUrl('/signin');

    return true;
  }

}
