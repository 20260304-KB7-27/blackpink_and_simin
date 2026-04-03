import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/profile/:id',
      component: () => import('@/pages/MemeberProfile.vue'),
    },
  ],
});

export default router;
