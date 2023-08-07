<script setup>
import { ref } from 'vue';

import Note from '@/components/Notes/Note.vue';

// Notes
const notes = ref([]);
const newNote = ref('');
const newNoteRef = ref(null);

// Add the new note to notes array
const addNoteHandler = () => {
  if (newNote.value.trim() === '') {
    return;
  }

  notes.value.unshift({
    id: crypto.randomUUID(),
    content: newNote.value
  });
  newNote.value = '';
  newNoteRef.value.focus();
}

// Delete the selected note from notes array
const deleteNoteHandler = (id) => {
  notes.value = notes.value.filter(note => note.id !== id);
}
</script>

<template>
  <div class="notes">
    <form class="card has-background-primary-dark mb-4 p-4"
          @submit.prevent="addNoteHandler">
      <div class="field">
        <label class="label has-text-white">New Note</label>
        <div class="control">
          <textarea v-model="newNote"
                    ref="newNoteRef"
                    class="textarea"
                    placeholder="Add a new note" />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button type="submit"
                  class="button has-background-primary is-link"
                  :disabled="newNote.trim() === ''">Add New Note</button>
        </div>
      </div>
    </form>

    <ul v-if="notes.length"
        role="list">
      <Note v-for="note in notes"
            :note="note"
            :key="note.id"
            @delete-note="deleteNoteHandler" />
    </ul>
    <p v-else>No notes yet! Please add some notes.</p>
  </div>
</template>