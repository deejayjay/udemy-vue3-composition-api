<script setup>
import { computed, reactive } from 'vue';
import { RouterLink } from 'vue-router';

import ModalDeleteNote from './ModalDeleteNote.vue';

// Define the props
const props = defineProps({
  note: {
    type: Object,
    required: true
  }
});

// Computed property which returns the length of the note's content
const characterLength = computed(() => {
  const length = props.note.content.length;
  if (length === 1) {
    return `${length} character`;
  }
  return `${length} characters`
});

// Delete Modal
const modals = reactive({
  deleteNote: false
});
</script>

<template>
  <li class="card mb-4"
      role="listitem">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/editNote/${note.id}`"
                  class="card-footer-item has-text-primary">Edit</RouterLink>
      <a href="#"
         class="card-footer-item has-text-danger"
         type="button"
         @click.prevent="modals.deleteNote = true">Delete</a>
    </footer>
    <ModalDeleteNote v-if="modals.deleteNote"
                     v-model="modals.deleteNote"
                     :note-id="note.id" />
  </li>
</template>