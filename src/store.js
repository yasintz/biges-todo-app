import Vue from 'vue';
import Vuex from 'vuex';
import LocalStorages from './lib/localStorage';
import i18n from './i18n';

Vue.use(Vuex);

const {
  userLocalStorage,
  langLocalStorage,
  todoLocalStorage,
  themeLocalStorage,
} = LocalStorages;

const store = new Vuex.Store({
  state: {
    user: userLocalStorage.getItem(),
    selectedLangLocale: langLocalStorage.getItem(),
    todos: todoLocalStorage.getItem(),
    visibility: 'all',
    searchText: '',
    theme: themeLocalStorage.getItem(),
  },
  getters: {
    theme(state) {
      return state.theme;
    },
    isLoggedIn(state) {
      return Boolean(state.user);
    },
    selectedLang(state) {
      return i18n.langs.find(
        (lang) => lang.locale === state.selectedLangLocale
      );
    },
    searchText(state) {
      return state.searchText;
    },

    visibility(state) {
      return state.visibility;
    },
    todos(state) {
      const filterResult =
        state.visibility === 'all'
          ? state.todos
          : state.todos.filter((todo) => {
              if (state.visibility === 'active') {
                return !todo.completed;
              }
              return todo.completed;
            });
      const searchText = state.searchText.toLowerCase();

      return searchText
        ? filterResult.filter(
            (todo) =>
              todo.title.toLowerCase().indexOf(searchText) > -1 ||
              todo.description.toLowerCase().indexOf(searchText) > -1
          )
        : filterResult;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setTheme(state, theme) {
      state.theme = theme;
    },
    setSelectedLang(state, lang) {
      state.selectedLang = lang;
    },
    setTodos(state, todos) {
      state.todos = todos;
    },
    setSearchText(state, searchText) {
      state.searchText = searchText;
    },
    setVisibility(state, visibility) {
      state.visibility = visibility;
    },
  },
  actions: {
    setTheme({ commit }, theme) {
      themeLocalStorage.setItem(theme);
      commit('setTheme', theme);
    },

    setVisibility({ commit }, visibility) {
      commit('setVisibility', visibility);
    },
    setSearchText({ commit }, searchText) {
      commit('setSearchText', searchText);
    },

    setUser({ commit }, user) {
      userLocalStorage.setItem(user);
      commit('setUser', user);
    },

    setSelectedLang(context, lang) {
      langLocalStorage.setItem(lang);
      i18n.locale = lang;
      context.commit('setSelectedLang', lang);
    },

    setTodos({ commit }, todos) {
      todoLocalStorage.setItem(todos);
      commit('setTodos', todos);
    },

    addNewTodo({ dispatch, state }, todo) {
      dispatch('setTodos', [
        {
          ...todo,
          id: state.todos.length,
          completed: false,
        },
        ...state.todos,
      ]);
    },

    removeTodo({ dispatch, state }, todoId) {
      dispatch(
        'setTodos',
        state.todos.filter((todo) => todo.id !== todoId)
      );
    },

    toggleTodo({ dispatch, state }, todoId) {
      dispatch(
        'setTodos',
        state.todos.map((todo) =>
          todo.id === todoId
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo
        )
      );
    },
  },
});

export default store;
