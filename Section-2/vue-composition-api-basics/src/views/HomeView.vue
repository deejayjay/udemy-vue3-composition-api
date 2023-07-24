<template>
  <div class="home">
    <div>
      <button type="button"
              class="btn"
              @click="decreaseCounter">
        -
      </button>
      <span class="counter">{{ counter }}</span>
      <button type="button"
              class="btn"
              @click="increaseCounter">
        +
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const counter = ref(0);

    function increaseCounter() {
      counter.value++;
    }

    function decreaseCounter() {
      if (counter.value === 0) {
        return;
      }
      counter.value--;
    }

    return { counter, increaseCounter, decreaseCounter }
  }
}
</script>

<style scoped>
.home {
  flex: 1;
  display: grid;
  place-items: center;
}

.btn,
.counter {
  font-size: 2.5rem;
  margin: 0.625rem;
}
</style>