<script setup>
import { ref } from 'vue';

import { useNotesStore } from '@/stores/notes';
import { storeToRefs } from 'pinia';
import Note from '@/components/Notes/Note.vue';
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useWatchCharacters } from '../composables/watchCharacters'

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

    <ul v-if="notes.length"
        role="list">
      <Note v-for="note in notes"
            :note="note"
            :key="note.id" />
    </ul>
    <p v-else>No notes yet! Please add some notes.</p>
  </div>
</template>