import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/dashboard'
      },
      {
        path: '/dashboard',
        component: () => import('@/views/DashboardPage.vue')
      },
      {
        path: '/gallery',
        component: () => import('@/views/GalleryPage.vue')
      },
      {
        path: '/settings',
        component: () => import('@/views/Settings/SettingsPage.vue'),
      },
      {
        path: '/settings/update_username',
        component: () => import('@/views/Settings/UpdateUsernamePage.vue')
      },
      {
        path: '/settings/update_password',
        component: () => import('@/views/Settings/UpdatePasswordPage.vue')
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
