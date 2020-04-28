import Vue from 'vue';
import VueI18n from 'vue-i18n';
import LocalStorages from './lib/localStorage';

const { langLocalStorage } = LocalStorages;

Vue.use(VueI18n);

const langs = [
  {
    name: 'Türkçe',
    locale: 'tr',
  },
  {
    name: 'English',
    locale: 'en',
  },
];

const messages = {
  en: {
    darkTheme: 'Dark theme',
    lightTheme: 'Light theme',

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
      loginError: 'Username or password incorrect.',
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
    darkTheme: 'Koyu tema',
    lightTheme: 'Açık tema',
    common: {
      username: 'kullanıcı adı',
    },
    header: {
      navbar: {
        login: 'Giriş Yap',
        logout: 'Cıkış Yap',
      },
    },
    home: {
      filter: {
        active: 'Aktif',
        completed: 'Tamamlanmış',
        all: 'Hepsi',
      },
      todosTitle: "Todo'lar",
      searchPlaceholder: 'Ara',
      addTodo: {
        buttonText: 'Ekle',
        title: 'Yeni Todo Ekle',
        titleInputLabel: 'Başlık',
        descriptionInputLabel: 'Açıklama',
      },
    },
    login: {
      title: 'Giriş Sayfası',
      username: 'Kullanıcı Adı',
      password: 'Şifre',
      buttonText: 'Giriş yap',
      loginError: 'Kullanıcı adı yada şifre geçersiz',
      emptyFieldError: 'Kullanıcı adı ve şifre boş olamaz',
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
