<script setup>
import { computed, reactive, ref } from 'vue'

import { useAuthStore } from "../stores/auth"

// Auth Store
const authStore = useAuthStore();

const isRegister = ref(false);

const title = computed(() => {
  return isRegister.value ? 'Register' : 'Login';
});

// Update the value of isRegister
function updateIsRegister(value) {
  isRegister.value = value;
}

// Credentials
const credentials = reactive({
  email: '',
  password: '',
});

// Reset credentials
function resetCredentials() {
  credentials.email = '';
  credentials.password = '';
}

// Handle registration/login
function handleSubmit() {
  if (!credentials.email || !credentials.password) {
    alert('Please enter both email and password!');
    return;
  }

  if (isRegister.value) {
    // Register
    authStore.registerUser(credentials).then(() => {
      resetCredentials();
    });
  } else {
    // Login
    authStore.loginUser(credentials).then(() => {
      resetCredentials();
    });
  }
}
</script>

<template>
  <div class="auth">
    <section class="tabs is-centered">
      <ul>
        <li :class="{ 'is-active': !isRegister }">
          <a @click.prevent="updateIsRegister(false)">Login</a>
        </li>
        <li :class="{ 'is-active': isRegister }">
          <a @click.prevent="updateIsRegister(true)">Register</a>
        </li>
      </ul>
    </section>
    <section class="card auth-form">
      <div class="card-content">
        <h2 class="title has-text-centered">{{ title }}</h2>
        <form @submit.prevent="handleSubmit">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input v-model="credentials.email"
                     class="input"
                     type="email"
                     placeholder="e.g. alexsmith@gmail.com">
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input v-model="credentials.password"
                     class="input"
                     type="password">
            </div>
          </div>
          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <button type="submit"
                      class="button is-primary">{{ title }}</button>
            </p>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
.auth-form {
  max-width: 30rem;
  margin: 0 auto;
}
</style>
