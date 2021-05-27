import { Storage } from '../memento/Storage'
import { Router } from '@angular/router';
export class ACL {

  //Redireccionamiento de home
  static getDefaultRedirectPath(): any {

    console.log('Accediendo a menu principal');
    const user = Storage.getItem('user');

    if(user) {

      const role = user.role;

      if ( ACL.isClient(role) ) {
        return '/home/customer';
      }

      if ( ACL.isManager(role) ) {
        return '/home/manager';
      }
    }

    return '/home';
  }

  static getRoles(rol): Boolean {
    return ['MANAGER', 'CLIENT'].includes(rol);
  }

  static isClient(role: string): Boolean {
    return role === 'CLIENT'
  }

  static isManager(role: string): Boolean {
    return role === 'MANAGER'
  }


}