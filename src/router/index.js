import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue'
import Chat from '@/views/Chat.vue'
import ChatLegacyPayment from '@/components/ChatItems/LegacyPayments/ChatLegacyPayment.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/chat',
    component: Chat,
  },
  {
    path: '/ChatLegacyPayment',
    component: ChatLegacyPayment,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
