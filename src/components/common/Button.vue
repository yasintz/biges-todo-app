<template>
  <button :type="type" :class="['v-button', color]" @click="$emit('click')">
    <span>{{ text }}</span>
    <span v-show="loading" class="lds-dual-ring"></span>
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'default',
      validator: (val) => ['default', 'outline'].includes(val),
    },
    loading: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'button',
      validator: (val) => ['button', 'submit'].includes(val),
    },
  },
};
</script>

<style>
button.v-button {
  display: inline-block;
  font-weight: 500;
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
  font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  border-color: var(--vue-green-color);
  color: var(--vue-green-color);
}
button.v-button.default {
  background-color: var(--vue-green-color);
  color: white;
}

button.v-button:active {
  border-color: var(--vue-dark-green-color);
  color: white;
  background-color: var(--vue-dark-green-color);
}

button.v-button.default:active {
  background-color: var(--vue-dark-green-color);
}
button.v-button:disabled {
  opacity: 0.8;
  cursor: not-allowed;
}
.lds-dual-ring {
  display: inline-block;
  margin-left: 8px;
  margin-bottom: -2px;
}
.lds-dual-ring:after {
  content: ' ';
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
