import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/team-introduce',
      component: () => import('@/pages/TeamIntroduce.vue'),
    },
  ],
});

export default router;
