class LocalStorage {
  constructor(key, initialValue) {
    this.key = `__${key.split(' ').join('_')}__`.toUpperCase();
    this.initialValue = initialValue;
    this.getItem = this.getItem.bind(this);
    this.setItem = this.setItem.bind(this);
  }
  getItem() {
    try {
      const item = window.localStorage.getItem(this.key);
      if (!item) {
        this.setItem(this.initialValue);
        return this.initialValue;
      }
      return JSON.parse(item);
    } catch (error) {
      this.setItem(this.initialValue);
      return this.initialValue;
    }
  }
  setItem(value) {
    try {
      window.localStorage.setItem(this.key, JSON.stringify(value));
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  }
}

const userLocalStorage = new LocalStorage('User');
const langLocalStorage = new LocalStorage('Lang', 'tr');
const todoLocalStorage = new LocalStorage('Todos', []);
const themeLocalStorage = new LocalStorage('Theme', 'light');

const LocalStorages = {
  userLocalStorage,
  langLocalStorage,
  todoLocalStorage,
  themeLocalStorage,
};

export default LocalStorages;
