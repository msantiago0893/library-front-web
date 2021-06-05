import { Storage } from '../memento/Storage'
export class ACL {

  static getDefaultRedirectPath(): any {

    const user = Storage.getItem('user');

    if(user) {

      const role = user && user.role;

      if ( ACL.isClient(role) ) {
        return 'customer';
      }

      if ( ACL.isManager(role) ) {
        return 'manager';
      }
    }

    return '/auth/login';
  }

  static getRoles(rol: any): Boolean {
    return ['MANAGER', 'CLIENT'].includes(rol);
  }

  static isClient(role: string): Boolean {
    return role === 'CLIENT'
  }

  static isManager(role: string): Boolean {
    return role === 'MANAGER'
  }


}