<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
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

  <RouterView />
</template>

<style scoped>
.nav {
  padding: 1.5rem 1rem;
  border-bottom: 1px solid #ccc;
  text-align: center;
}

.nav-link {
  margin: 0 0.5rem;
}
</style>
