import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import ViewEditNote from '@/views/ViewEditNote.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'notes',
      component: ViewNotes
    },
    {
      path: '/editNote/:id',
      name: 'edit-note',
      component: ViewEditNote
    },
    {
      path: '/stats',
      name: 'stats',
      component: ViewStats
    }
  ]
});

export default router;