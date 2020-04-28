<template>
  <button :type="type" class="v-button">{{text}}</button>
</template>

<script>
export default {
  name: "VButton",
  props: {
    text: {
      type: String,
      required: true
    },

    type: {
      type: String,
      default: "button",
      validator: val => ["button", "submit"].includes(val)
    }
  }
};
</script>

<style>
button.v-button {
  display: inline-block;
  font-weight: 500;
  color: white;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  outline: 0;
  border: 1px solid transparent;
  padding: 0.3125rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-family: Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  background-color: var(--vue-green-color);
  border-color: var(--vue-green-color);
}
button.v-button:active {
  background-color: var(--vue-dark-green-color);
  border-color: var(--vue-dark-green-color);
}
</style>