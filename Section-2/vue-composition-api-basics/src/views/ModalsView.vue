<template>
  <div class="modals">
    <h1>Modals</h1>
    <div class="form-controls">
      <label for="dark">Show Dark Modals</label>
      <input v-model="showDarkModals"
             type="checkbox"
             id="dark"
             class="form-check" />
    </div>
    <button type="button"
            v-show="!showModal"
            @click="handleShowModal">Show Modal</button>
    <component v-model="showModal"
               :is="showDarkModals ? ModalDark : Modal"
               title="This is a modal">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sint, minus laudantium excepturi, iste
        incidunt omnis libero magnam quae, modi harum consequuntur officia optio voluptatum recusandae tempore
        obcaecati
        minima. Fuga?
      </p>
    </component>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Modal from '@/components/Modal.vue';
import ModalDark from '@/components/ModalDark.vue';

const showModal = ref(false);
const showDarkModals = ref(false);

// function handleHideModal() {
//   showModal.value = false;
// }

function handleShowModal() {
  showModal.value = true;
}
</script>

<style scoped>
.modals {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(100%, 80rem);
  margin: 0 auto;
}

h1 {
  font-weight: 700;
  font-size: 2rem;
  color: #31327c;
  margin-bottom: 1rem;
}

.form-controls {
  margin-bottom: 1rem;
}

.form-check {
  margin-left: 0.5rem;
}
</style>