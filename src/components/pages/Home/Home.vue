<template>
  <div class="home-wrapper">
    <AddTodo />
    <h3>{{ $t('home.todosTitle') }}</h3>
    <VInput :placeholder="$t('home.searchPlaceholder')" v-model="search" />
    <div class="filter-wrapper">
      <VButton
        :text="$t('home.filter.all')"
        :color="visibility === 'all' ? 'default' : 'outline'"
        :disabled="visibility === 'all'"
        @click="setVisibility('all')"
      />
      <VButton
        :text="$t('home.filter.active')"
        :disabled="visibility === 'active'"
        :color="visibility === 'active' ? 'default' : 'outline'"
        @click="setVisibility('active')"
      />
      <VButton
        :text="$t('home.filter.completed')"
        :disabled="visibility === 'completed'"
        :color="visibility === 'completed' ? 'default' : 'outline'"
        @click="setVisibility('completed')"
      />
    </div>
    <div class="todos-wrapper">
      <Todo
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove="onRemoveTodo"
        @toggle="onToggleTodo"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AddTodo from './AddTodo';
import Todo from './Todo';
export default {
  name: 'Home',
  components: { AddTodo, Todo },
  methods: {
    ...mapActions([
      'setSearchText',
      'removeTodo',
      'toggleTodo',
      'setVisibility',
    ]),
    onRemoveTodo(todo) {
      this.removeTodo(todo.id);
    },
    onToggleTodo(todo) {
      this.toggleTodo(todo.id);
    },
  },
  computed: {
    ...mapGetters(['todos', 'searchText', 'visibility']),
    search: {
      get() {
        return this.searchText;
      },
      set(value) {
        this.setSearchText(value);
      },
    },
  },
};
</script>

<style scoped>
.home-wrapper >>> h3 {
  text-align: center;
}
.todos-wrapper {
  margin-top: 16px;
}
.filter-wrapper button {
  margin-left: 8px;
}
</style>
