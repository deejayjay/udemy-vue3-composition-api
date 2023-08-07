<script setup>
import NavBar from '@/components/layouts/NavBar.vue';
</script>

<template>
  <NavBar />
  <div class="container is-max-widescreen px-2 py-4">
    <RouterView />
  </div>
</template>