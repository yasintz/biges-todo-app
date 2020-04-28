<template>
  <div>
    <h3>{{ $t('home.addTodo.title') }}</h3>
    <form @submit="handleSubmit">
      <VInput :label="$t('home.addTodo.titleInputLabel')" v-model="title" />
      <VInput
        :label="$t('home.addTodo.descriptionInputLabel')"
        v-model="description"
        type="textarea"
      />
      <VButton
        class="add-button"
        :disabled="isButtonDisabled"
        :text="$t('home.addTodo.buttonText')"
        type="submit"
      />
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'AddTodo',
  data: () => ({
    title: '',
    description: '',
  }),

  computed: {
    isButtonDisabled() {
      return !(this.title && this.description);
    },
  },
  methods: {
    ...mapActions(['addNewTodo']),
    handleSubmit(e) {
      e.preventDefault();
      this.addNewTodo({ title: this.title, description: this.description });
      this.title = '';
      this.description = '';
    },
  },
};
</script>

<style scoped>
.add-button {
  width: 100%;
}
</style>
