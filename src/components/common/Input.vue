<template>
  <div class="input-wrapper">
    <label>{{label}}</label>
    <input
      :name="name"
      :type="type"
      class="input"
      :value="value"
      :placeholder="placeholder"
      v-on:input="updateValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "VInput",
  props: {
    placeholder: {
      type: String,
      required: true
    },
    value: {
      type: String
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    type: {
      type: String,
      default: "text",
      validator: val => ["text", "password"].includes(val)
    }
  },
  methods: {
    updateValue: function(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<style>
.input-wrapper {
  margin-bottom: 1rem;
}
.input-wrapper label {
  display: inline-block;
  margin-bottom: 0.5rem;

  font-size: 0.83333rem;
  font-weight: 700;
  letter-spacing: 0.02em;

  font-family: Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
}
.input-wrapper input {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid var(--vue-green-color);
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.input-wrapper input:focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(66, 185, 131, 0.25);
}
</style>