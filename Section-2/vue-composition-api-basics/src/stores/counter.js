import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/* export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
}) */

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    title: "My Counter Title"
  }),
  getters: {
    oddOrEven: (state) => (state.count % 2 === 0 ? "even" : "odd")
  },
  actions: {
    increaseCount(value) {
      this.count += value;
    },
    decreaseCount(value) {
      if (this.count === 0 || this.count - value < 0) {
        return;
      }
      this.count -= value;
    }
  }
});
