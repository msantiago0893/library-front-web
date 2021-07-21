import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from 'src/app/memento/Storage';
import { ACL } from 'src/app/security/acl';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private router: Router
  ) {}


  decodeToken(token) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  infoUser(token) {
    let { authorities, user } = this.decodeToken(token);
    user.authority = String(authorities);

    return user;
  }

  isManager() {

    const user = Storage.getItem('user');

    return user ? ACL.isManager(user.authority) : false;
  }

  logout() {

    localStorage.clear();
    this.router.navigateByUrl('auth');
  }
}
