<template>
  <div class="modals">
    <h1>Modals</h1>
    <button type="button"
            v-show="!showModal"
            @click="handleShowModal">Show Modal</button>
    <teleport to="body">
      <div v-show="showModal"
           class="overlay"
           @click="handleHideModal">
        <div class="modal"
             @click.stop>
          <h2>This is a modal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sint, minus laudantium excepturi, iste
            incidunt omnis libero magnam quae, modi harum consequuntur officia optio voluptatum recusandae tempore
            obcaecati
            minima. Fuga?
          </p>
          <button type="button"
                  @click="handleHideModal">Hide Modal</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);

function handleHideModal() {
  showModal.value = false;
}

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

h2 {
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