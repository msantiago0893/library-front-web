import { Storage } from '../memento/Storage'
export class ACL {

  static getDefaultRedirectPath(): any {

    const user = Storage.getItem('user');

    if(user) {

      const role = user && user.authority;

      if ( ACL.isClient(role) ) {
        return 'customer';
      }

      if ( ACL.isManager(role) ) {
        return 'manager';
      }

      return '';
    }

    return '/auth/signin';
  }

  static isClient(role: string): Boolean {
    return role === 'CUSTOMER'
  }

  static isManager(role: string): Boolean {
    return role === 'MANAGER'
  }


}