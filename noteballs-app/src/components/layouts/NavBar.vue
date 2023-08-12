<script setup>
import { ref } from 'vue';

// Mobile Nav
const showMobileNav = ref(false);
const toggleMobileNav = () => {
  showMobileNav.value = !showMobileNav.value;
};
</script>

<template>
  <nav class="navbar is-primary"
       role="navigation"
       aria-label="main navigation">
    <div class="container is-max-widescreen px-2">
      <div class="navbar-brand">
        <h1 class="navbar-item is-size-4 is-family-monospace">NoteBalls</h1>

        <a role="button"
           class="navbar-burger"
           :class="{ 'is-active': showMobileNav }"
           aria-label="menu"
           aria-expanded="false"
           data-target="navbarBasicExample"
           @click="toggleMobileNav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample"
           class="navbar-menu"
           :class="{ 'is-active': showMobileNav }">
        <div class="navbar-end">
          <RouterLink to="/"
                      class="navbar-item"
                      active-class="is-active"
                      @click="showMobileNav = false">
            Home
          </RouterLink>
          <RouterLink to="/stats"
                      class="navbar-item"
                      active-class="is-active"
                      @click="showMobileNav = false">
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@media screen and (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>