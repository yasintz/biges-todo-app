<template>
  <div class="login-container">
    <h1 class="page-title">Login</h1>
    <form @submit="checkForm">
      <VInput placeholder="username" label="User Name" name="username" v-model="username" />
      <VInput
        placeholder="• • • • • • • •"
        label="Password"
        type="password"
        name="password"
        v-model="password"
      />
      <VButton text="Login" type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    username: "",
    password: ""
  }),
  methods: {
    checkForm(e) {
      console.log({ username: this.username, password: this.password });

      e.preventDefault();
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 25%;
  margin: auto;
}
</style>
