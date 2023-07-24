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
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter() {
      this.counter++
    },
    decreaseCounter() {
      if (this.counter === 0) {
        return
      }
      this.counter--
    }
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