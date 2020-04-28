<template>
  <div class="login-container">
    <h1 class="page-title">{{$t('login.title')}}</h1>
    <form @submit="handleSubmit">
      <VInput
        :placeholder="$t('common.username')"
        :label="$t('login.username')"
        :isInvalid="isUsernameInvalid"
        v-model="username"
      />
      <VInput
        placeholder="• • • • • • • •"
        :label="$t('login.password')"
        :isInvalid="isPasswordInvalid"
        type="password"
        v-model="password"
      />
      <VButton :text="$t('login.buttonText')" type="submit" :loading="isLoading" />
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'


export default {
  name: "Login",
  data: () => ({
    username: "",
    password: "",
    isLoading: false,
    isUsernameInvalid: false,
    isPasswordInvalid: false
  }),
  methods: {
    ...mapActions({
      setUser:'setUser'
    }),
 
    async handleSubmit(e) {
      e.preventDefault();
      if(!this.username||!this.password) {
          this.isUsernameInvalid = !this.username
          this.isPasswordInvalid = !this.password
          this.$toast.open({
            message: this.$t("login.emptyFieldError"),
            type: "error"
          });
     
          return;
      }

      this.isUsernameInvalid = false 
      this.isPasswordInvalid = false 
         
      this.isLoading = true;

      try {
        const user = await this.$apiService.login(this.username, this.password);
        this.setUser(user)
        this.$router.push({name:'Home'})
      } catch (error) {
        this.$toast.open({
          message: this.$t("login.loginError"),
          type: "error"
        });
      }
      this.isLoading = false;
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 32%;
  margin: auto;
}
</style>
