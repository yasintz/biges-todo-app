<template>
  <div class="header">
    <div>
      <VButton
        :text="$t('header.navbar.logout')"
        color="outline"
        class="logout-btn"
        v-if="isLoggedIn"
        @click="logout"
      />
      <VButton
        :text="theme == 'dark' ? $t('lightTheme') : $t('darkTheme')"
        @click="setTheme(theme == 'dark' ? 'light' : 'dark')"
        color="outline"
      />
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
    ...mapGetters(['isLoggedIn', 'selectedLang', 'theme']),
  },
  methods: {
    ...mapActions(['setSelectedLang', 'setUser', 'setTheme']),
    onChangeLang(data) {
      this.setSelectedLang(data.locale);
    },
    logout() {
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
  flex-direction: column;
}
@media (min-width: 450px) {
  .header {
    flex-direction: row;
  }
}

.header a {
  color: var(--vue-green-color);
}
.logout-btn {
  margin-right: 8px;
}
</style>
