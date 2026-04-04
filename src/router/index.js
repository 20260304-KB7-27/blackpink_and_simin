import { createRouter, createWebHistory } from 'vue-router'

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
    {
      path: '/team-introduce',
      component: () => import('@/pages/TeamIntroduce.vue'),
    },
    {
      path: '/guestbook',
      component: () => import('@/pages/Guestbook.vue')
    },
  ],
});

export default router
