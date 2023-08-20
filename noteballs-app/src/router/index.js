import { createRouter, createWebHashHistory } from "vue-router";

import { useAuthStore } from "../stores/auth";
import ViewNotes from "@/views/ViewNotes.vue";
import ViewStats from "@/views/ViewStats.vue";
import ViewEditNote from "@/views/ViewEditNote.vue";
import ViewAuth from "@/views/ViewAuth.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "notes",
      component: ViewNotes
    },
    {
      path: "/editNote/:id",
      name: "edit-note",
      component: ViewEditNote
    },
    {
      path: "/stats",
      name: "stats",
      component: ViewStats
    },
    {
      path: "/auth",
      name: "auth",
      component: ViewAuth
    }
  ]
});

// Navigation Guards
router.beforeEach(async (to, _from) => {
  const authStore = useAuthStore();
  if (!authStore.user.id && to.name !== "auth") {
    return { name: "auth" };
  }
  if (authStore.user.id && to.name === "auth") {
    return false;
  }
  return true;
});

export default router;
