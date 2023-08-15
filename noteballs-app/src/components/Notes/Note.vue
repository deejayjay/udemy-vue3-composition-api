<script setup>
import { computed, reactive } from 'vue';
import { RouterLink } from 'vue-router';
import { formatDistance, subDays } from 'date-fns'

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

const distance = formatDistance(props.note.lastModifiedDate, new Date(), { addSuffix: true })

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
        <span class="is-size-4">{{ note.content }}</span>
        <div
             class="is-flex is-justify-content-space-between is-align-content-flex-start is-flex-wrap-wrap has-text-grey-light mt-2">
          <div>
            <div class="is-size-6">{{ note.lastModifiedDate.toLocaleString() }}</div>
            <small>{{ distance }}</small>
          </div>
          <div class="has-text-right is-italic">
            <small>{{ characterLength }}</small>
          </div>
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