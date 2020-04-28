<template>
  <div class="header">
    <div>
      <a v-if="isLoggedIn" @click="logout" href="#">{{
        $t('header.navbar.logout')
      }}</a>
    </div>
    <VDropdown
      :options="$i18n.langs"
      :selected="selectedLang"
      v-on:updateOption="onChangeLang"
      :closeOnOutsideClick="true"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isLoggedIn', 'selectedLang']),
  },
  methods: {
    ...mapActions(['setSelectedLang', 'setUser']),
    onChangeLang(data) {
      this.setSelectedLang(data.locale);
    },
    logout(event) {
      event.preventDefault();
      this.setUser(undefined);
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header a {
  color: var(--vue-green-color);
}
</style>
