<template>
  <header class="header">
    <nav class="nav">
      <RouterLink to="/"
                  class="nav-link">Home</RouterLink>
      <RouterLink to="/posts"
                  class="nav-link">Posts</RouterLink>
      <RouterLink to="/modals"
                  class="nav-link">Modals</RouterLink>
      <RouterLink to="/about"
                  class="nav-link">About</RouterLink>
    </nav>
    <div class="user-data">
      {{ userData.name }} <span class="username">@{{ userData.username }}</span>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { reactive, provide } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

// User data
const userData = reactive({
  name: "Deepak",
  username: "deepak.joyjose"
})

provide("userData", userData);
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 1.5rem 1rem;
}

.nav-link {
  margin: 0 0.5rem;
}

.user-data {
  color: #6c6c6c;
}

.username {
  font-style: italic;
}
</style>
