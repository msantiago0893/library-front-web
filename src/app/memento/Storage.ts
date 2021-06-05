export class Storage {

  // private static instance: Storage;

  // private constructor() {}

  // public static getInstance(): Storage {

  //   if (!this.instance) {
  //     this.instance = new Storage();
  //   }
  //   return this.instance;
  // }

  static getItem(key) {

    const result = localStorage.getItem(key);

    return result ? JSON.parse(result) : result;
  }

  static removeItem(key) {
    localStorage.removeItem(key);
  }

  static setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return this;
  }

  static clear() {
    localStorage.clear();
  }

}