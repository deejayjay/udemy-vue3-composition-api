<template>
  <div v-if="modelValue">
    <teleport to="body">
      <div class="overlay"
           @click="handleCloseModal">
        <div class="modal"
             @click.stop>
          <h2 class="modal__title">{{ title }}</h2>
          <slot />
          <button type="button"
                  @click="handleCloseModal">Hide Modal</button>
          <div>
            Username: {{ userData.username }}
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { inject } from "vue"

// inject
const userData = inject("userData");

// Props
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "Default Title",
  }
});

// Emits
const emit = defineEmits(["update:modelValue"])

function handleCloseModal() {
  emit("update:modelValue", false)
}
</script>

<style scoped>
.modal__title {
  font-weight: 600;
  font-size: 1.25rem;
  color: #31327c;
  margin-bottom: 0.5rem;
  text-align: center;
}

.overlay {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  background-color: #fafafa;
  padding: 1rem;
  border-radius: 4px;
  width: min(100%, 35rem);
}

.modal button {
  display: block;
  margin: 1rem auto 0;
}
</style>