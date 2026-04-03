import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/rules', // /rules로 바로 이동 (merge 시 삭제)
    },
    {
      path: '/rules',
      component: () => import('@/pages/TeamRule.vue'),
    },
  ],
});

export default router;
