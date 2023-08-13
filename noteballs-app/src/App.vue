<script setup>
import { onMounted } from 'vue';
import { useNotesStore } from './stores/notes';
import NavBar from '@/components/layouts/NavBar.vue';

// Notes Store
const notesStore = useNotesStore();

onMounted(() => {
  notesStore.getNotes();
});
</script>

<template>
  <NavBar />
  <div class="container is-max-widescreen px-2 py-4">
    <RouterView />
  </div>
</template>