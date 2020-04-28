<template>
  <div :class="{ 'todo-wrapper': true, completed: todo.completed }">
    <input
      class="toggle"
      type="checkbox"
      @change="handleChange($event)"
      :checked="todo.completed"
    />
    <div class="content">
      <h4>
        {{ todo.title }}
      </h4>

      <p>
        {{ todo.description }}
      </p>
    </div>
    <VIcon icon="trash" class="trash-icon" @click="onTrashClick" />
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    todo: {
      type: Object,
    },
  },

  methods: {
    onTrashClick() {
      this.$emit('remove', this.todo);
    },
    handleChange: function(e) {
      this.$emit('toggle', this.todo, e.target.checked);
    },
  },
};
</script>

<style>
.todo-wrapper {
  border: 1px solid var(--vue-green-color);
  margin-bottom: 8px;
  padding: 16px 16px 16px 0;
  border-radius: 4px;
  position: relative;
}
.todo-wrapper.completed {
  opacity: 0.5;
}

.todo-wrapper .content {
  padding: 0 48px;
}
.todo-wrapper h4 {
  margin: 0;
  word-break: break-word;
}
.todo-wrapper p {
  margin: 4px 0 0 8px;
  word-break: break-word;
}
.todo-wrapper .trash-icon {
  position: absolute;
  top: 30%;
  right: 24px;
  cursor: pointer;
}
.todo-wrapper .toggle {
  text-align: center;
  width: 40px;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  border: none;
  -webkit-appearance: none;
  appearance: none;
}

.todo-wrapper .toggle {
  opacity: 0;
  cursor: pointer;
}

.todo-wrapper .toggle + div {
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: center left;
}

.todo-wrapper .toggle:checked + div {
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
}
</style>
