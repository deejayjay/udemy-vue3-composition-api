<template>
  <div class="posts">
    <h1>Post Details</h1>
    <div>
      <h2>{{ currentPost.title }} - {{ $route.params.id }}</h2>
      <p>{{ currentPost.body }}</p>
      <button type="button"
              @click="handleBackToPosts">Back To Posts</button>
      <button type="button"
              @click="$router.push('/')">Back To Home</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const postsList = [
  {
    id: 1,
    title: 'Post 1',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    id: 2,
    title: 'Post 2',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    id: 3,
    title: 'Post 3',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  }
];

const currentPost = computed(() => postsList.find(post => post.id === +route.params.id));

function handleBackToPosts() {
  router.push('/posts');
}
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

button {
  margin-right: 0.5rem;
}
</style>
