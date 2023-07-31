<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts"
          :key="post.id">
        <RouterLink :to="`/posts/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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
</style>
