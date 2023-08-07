<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts"
          :key="post.id">
        <RouterLink :to="`/posts/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>

    <button type="button"
            class="counter-button"
            :class="{ 'green': oddOrEven === 'even' }"
            @click="increaseCounter(1)">{{ counterData.count }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { useCounter } from '@/use/useCounter'

const posts = ref([
  {
    id: 1,
    title: 'My first post',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    id: 2,
    title: 'My second post',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    id: 3,
    title: 'My third post',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  }
]);

// Counter
const { counterData, increaseCounter, oddOrEven } = useCounter();
</script>

<style scoped>
.posts {
  flex: 1;
  display: grid;
  place-items: center;
}

h1 {
  font-weight: 700;
  font-size: 2rem;
  color: #31327c;
}

.counter-button {
  font-size: 3rem;
  width: min(20rem, 100%);
  background-color: #31327c;
  color: #fafafa;
  border: none;
  border-radius: 4px;
  transition: background-color 0.2s ease-in-out;
}

.counter-button.green {
  background-color: #007c61;
}

.counter-button:hover {
  cursor: pointer;
  background-color: #3f40d6;
}

.counter-button.green:hover {
  background-color: #14bd98;
}
</style>
