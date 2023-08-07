import { reactive, computed, watch, nextTick } from 'vue';

const counterData = reactive({
  count: 0,
  title: 'My Counter',
});

export function useCounter() {
  watch(() => counterData.count, (newCount, _oldCount) => {
    if (newCount === 20) {
      alert('Counter is at 20!');
    }
  })

  const oddOrEven = computed(() => counterData.count % 2 !== 0 ? 'odd' : 'even');

  async function increaseCounter(number) {
    counterData.count += number;

    const counterRef = document.getElementById('counter');

    if (!counterRef) return;
    console.log(`Counter before DOM update: ${document.getElementById('counter').textContent}`);

    await nextTick(() => {
      console.log(`Counter after DOM update: ${document.getElementById('counter').textContent}`);
    });
  }

  function decreaseCounter(number) {
    if (counterData.count === 0 || counterData.count - number < 0) {
      return;
    }
    counterData.count -= number;
  }

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter,
  }
}