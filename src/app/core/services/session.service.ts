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


  isManager() {

    const user = Storage.getItem('user');

    return user ? ACL.isManager(user.role) : false;
  }

  logout() {

    localStorage.clear();
    this.router.navigateByUrl('auth');
  }
}
