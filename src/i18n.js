import Vue from 'vue';
import VueI18n from 'vue-i18n';
import LocalStorages from './lib/localStorage';

const { langLocalStorage } = LocalStorages;

Vue.use(VueI18n);

const langs = [
  {
    name: 'Turkce',
    locale: 'tr',
  },
  {
    name: 'English',
    locale: 'en',
  },
];

const messages = {
  en: {
    common: {
      username: 'username',
    },
    header: {
      navbar: {
        login: 'Login',
        home: 'Home',
        logout: 'Logout',
      },
    },
    login: {
      title: 'Login',
      username: 'User Name',
      password: 'Password',
      buttonText: 'Login',
      loginError: 'Username or Password incorrect',
      emptyFieldError: 'Username and password cannot be empty',
    },
    home: {
      filter: {
        active: 'Active',
        completed: 'Completed',
        all: 'All',
      },
      todosTitle: 'Todos',
      searchPlaceholder: 'Search',
      addTodo: {
        buttonText: 'Add',
        title: 'Add New Todo',
        titleInputLabel: 'Title',
        descriptionInputLabel: 'Description',
      },
    },
  },

  tr: {
    common: {
      username: 'kullanici adi',
    },
    header: {
      navbar: {
        login: 'Giris Yap',
        home: 'Ana Sayfa',
        logout: 'Cikis Yap',
      },
    },
    home: {
      filter: {
        active: 'Aktif',
        completed: 'Tamamlanmis',
        all: 'Hepsi',
      },
      todosTitle: "Todo'lar",
      searchPlaceholder: 'Ara',
      addTodo: {
        buttonText: 'Ekle',
        title: 'Yeni Todo Ekle',
        titleInputLabel: 'Baslik',
        descriptionInputLabel: 'Aciklama',
      },
    },
    login: {
      title: 'Giris Yap',
      username: 'Kullanici Adi',
      password: 'Sifre',
      buttonText: 'Giris yap',
      loginError: 'Kullanici adi yada sifre gecersiz',
      emptyFieldError: 'Kullanici adi ve sifre bos olamaz',
    },
  },
};

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: langLocalStorage.getItem(),
  messages,
});

i18n.langs = langs;

export default i18n;
