<template>
  <h1 ref="appTitleRef"
      class="app__title">{{ appTitle }}</h1>
  <div class="home">
    <div class="counter__wrapper">
      <h2 class="title">{{ counterData.title }}</h2>
      <div>
        <button type="button"
                class="btn"
                @click="decreaseCounter(2)">
          --
        </button>
        <button type="button"
                class="btn"
                @click="decreaseCounter(1)">
          -
        </button>
        <span class="counter"
              id="counter">{{ counterData.count }}</span>
        <button type="button"
                class="btn"
                @click="increaseCounter(1)">
          +
        </button>
        <button type="button"
                class="btn"
                @click="increaseCounter(2)">
          ++
        </button>
      </div>
      <p>This counter is {{ oddOrEven }}</p>
      <div class="edit__wrapper">
        <label for="edit"
               class="edit__label">Edit counter title:</label>
        <input v-model="counterData.title"
               type="text"
               id="edit"
               class="edit__control">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import { useCounter } from '@/use/useCounter'

const appTitle = 'My Awesome Counter App'
const appTitleRef = ref(null);

onMounted(() => {
  console.log(appTitleRef.value);
});

// Counter
const { counterData, oddOrEven, increaseCounter, decreaseCounter } = useCounter();
</script>

<style scoped>
.home {
  flex: 1;
  display: grid;
  place-items: center;
}

.edit__wrapper {
  margin-top: 1rem;
}

.edit__label {
  display: block;
}

.app__title {
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
}

.counter__wrapper {
  text-align: center;
}

.title {
  text-align: center;
  font-weight: 600;
  font-size: 1.5rem;
}

.btn,
.counter {
  font-size: 2.5rem;
  margin: 0.625rem;
}
</style>