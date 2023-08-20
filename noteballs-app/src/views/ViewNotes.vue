<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import { useNotesStore } from '@/stores/notes';
import { useWatchCharacters } from '../composables/watchCharacters'
import Note from '../components/Notes/Note.vue';
import AddEditNote from '../components/Notes/AddEditNote.vue'

// Notes Store
const notesStore = useNotesStore();
const { notes } = storeToRefs(notesStore);
const { addNote } = notesStore;

// Notes
const newNote = ref('');
const addEditNoteRef = ref(null);

// Watch characters in newNote
useWatchCharacters(newNote);

// Add the new note to notes array
const addNoteHandler = () => {
  // Add the new note to notes array in Notes Store
  addNote(newNote.value);

  newNote.value = '';
  addEditNoteRef.value.focusTextArea();
}
</script>

<template>
  <div class="notes">
    <h2 class="title is-4">View Notes</h2>
    <AddEditNote v-model="newNote"
                 ref="addEditNoteRef"
                 @handleSubmit="addNoteHandler">
      <template #buttons>
        <button type="submit"
                class="button has-background-primary is-link"
                :disabled="newNote.trim() === ''">Add New Note</button>
      </template>
    </AddEditNote>

    <progress v-if="!notesStore.notesLoaded"
              class="progress is-large is-info"
              max="100" />
    <ul v-if="notes && notes.length"
        role="list">
      <Note v-for="note in notes"
            :note="note"
            :key="note.id" />
    </ul>
    <div v-else
         class="notification is-warning is-light is-size-6 is-family-monospace has-text-centered py-6">No notes yet!
      Please add
      some
      notes.
    </div>
  </div>
</template>