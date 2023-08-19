<script setup>
import { onMounted } from 'vue';

import { useAuthStore } from './stores/auth';
import NavBar from '@/components/layouts/NavBar.vue';

// Auth Store
const authStore = useAuthStore();

onMounted(() => {
  authStore.initAuth();
});
</script>

<template>
  <NavBar />
  <main class="main container is-max-widescreen px-2 py-4">
    <RouterView />
  </main>
</template>

<style scoped>
.main {
  height: calc(100vh - 3.25rem);
}
</style>