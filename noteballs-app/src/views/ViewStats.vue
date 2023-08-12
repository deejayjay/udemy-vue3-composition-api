<script setup>
import { storeToRefs } from 'pinia';

import { useNotesStore } from '../stores/notes';

const notesStore = useNotesStore();
const { totalNoOfCharacters, totalNumberOfNotes } = storeToRefs(notesStore);

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
  </div>
</template>