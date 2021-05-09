import { Router } from '@angular/router';
import { Storage } from '../memento/Storage'

export class ACL {

  static getDefaultRedirectPath(): any {

    const user = Storage.getItem('user');

    if(user) {

      const role = user.role.code;

      if ( ACL.isClient(role) ) {
        return '/customer';
      }

      if ( ACL.isManager(role) ) {
        return '/home';
      }
    }

    return '/';
  }

  static isClient(role: string): Boolean {
    return role === 'CLIENT'
  }

  static isManager(role: string): Boolean {
    return role === 'MANAGER'
  }


}