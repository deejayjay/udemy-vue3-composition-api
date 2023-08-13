<script setup>
import { onKeyStroke } from '@vueuse/core'

import { useNotesStore } from '@/stores/notes';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  noteId: {
    type: String,
    required: true
  }
})
const $emit = defineEmits(['update:modelValue'])

// Notes Store
const notesStore = useNotesStore();
const { deleteNoteById } = notesStore;

function closeModal() {
  $emit('update:modelValue', false)
}

function deleteHandler() {
  deleteNoteById(props.noteId)
}

// Close modal on 'Esc' keypress
onKeyStroke('Escape', (e) => {
  closeModal()
})
</script>

<template>
  <div class="modal is-active p-2">
    <div class="modal-background"
         @click="closeModal"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Confirm Delete</p>
        <button class="delete"
                aria-label="close"
                @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <p>Are you sure you want to delete the note?</p>
      </section>
      <footer class="modal-card-foot is-justify-content-end">
        <button class="button"
                @click="closeModal">Cancel</button>
        <button class="button is-danger"
                @click="deleteHandler">Delete</button>
      </footer>
    </div>
  </div>
</template>