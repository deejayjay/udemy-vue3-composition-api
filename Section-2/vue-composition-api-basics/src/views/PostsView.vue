<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li v-for="postId in 3">
        <RouterLink :to="`/posts/${postId}`">Post {{ postId }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

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
