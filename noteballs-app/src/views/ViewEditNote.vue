<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

import { useNotesStore } from '@/stores/notes';
import AddEditNote from '@/components/Notes/AddEditNote.vue';

// Notes store
const notesStore = useNotesStore();
const { updateNoteById } = notesStore;
const { getNoteContent } = storeToRefs(notesStore);

// Route & Router
const $route = useRoute();
const $router = useRouter();

// Data refs
const noteContent = ref('');
const addEditNoteRef = ref(null);


function updateNoteHandler() {
  // Update the note content in notes array in Notes Store
  updateNoteById(
    $route.params.id, noteContent.value
  );

  $router.push({ name: 'notes' });
}

onMounted(() => {
  const currentNoteId = $route.params.id;
  noteContent.value = getNoteContent.value(currentNoteId);
  addEditNoteRef.value.focusTextArea();
});
</script>

<template>
  <section class="edit-note">
    <h2 class="title is-4">Edit Notes</h2>
    <AddEditNote v-model="noteContent"
                 bgColor="info"
                 placeholder="Please edit the note..."
                 ref="addEditNoteRef"
                 @handleSubmit="updateNoteHandler">
      <template #buttons>
        <button type="button"
                class="button is-light is-link mr-2"
                @click="$router.push('/')">Cancel</button>
        <button type="submit"
                class="button has-background-info is-link"
                :disabled="noteContent.trim() === ''">Save Note</button>
      </template>
    </AddEditNote>
  </section>
</template>
