export class Storage {

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
