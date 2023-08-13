<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import { useNotesStore } from '../stores/notes';
import { useWatchCharacters } from '@/composables/watchCharacters'

const notesStore = useNotesStore();
const { totalNoOfCharacters, totalNumberOfNotes } = storeToRefs(notesStore);

const feedback = ref('');

// Watch characters in feedback
useWatchCharacters(feedback, 250);
</script>

<template>
  <div class="stats">
    <h2 class="title is-4">Stats</h2>
    <table class="table is-striped is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number for Notes</td>
          <td>{{ totalNumberOfNotes }}</td>
        </tr>
        <tr>
          <td>Number of Characters (of all notes)</td>
          <td>{{ totalNoOfCharacters }}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <textarea v-model="feedback"
                class="textarea"
                placeholder="Why do you think Noteballs is the best?"
                maxlength="250"
                v-auto-focus />
    </div>
  </div>
</template>