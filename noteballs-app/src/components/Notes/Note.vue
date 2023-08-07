<script setup>
import { computed } from 'vue';

// Define the props
const props = defineProps({
  note: {
    type: Object,
    required: true
  }
});

// Define the emits
const emit = defineEmits(['deleteNote']);

// Computed property which returns the length of the note's content
const characterLength = computed(() => {
  const length = props.note.content.length;
  if (length === 1) {
    return `${length} character`;
  }
  return `${length} characters`
});

// Emit an event to delete the note
const deleteClickHandler = (id) => {
  emit('deleteNote', id);
}
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
      <a href="#"
         class="card-footer-item has-text-primary">Edit</a>
      <a href="#"
         class="card-footer-item has-text-danger"
         type="button"
         @click="deleteClickHandler(note.id)">Delete</a>
    </footer>
  </li>
</template>