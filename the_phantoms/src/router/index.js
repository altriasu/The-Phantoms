import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import myPalace from '../views/myPalace.vue';
import FightView from '../views/FightView.vue';
import RegisterView from '../views/RegisterView.vue';
import NotFound from '../views/NotFound.vue';
import UserlistView from '@/views/UserlistView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mypalace/:userId/',
    name: 'mypalace',
    component: myPalace
  },
  {
    path: '/fight/',
    name: 'fight',
    component: FightView
  },
  {
    path: '/userlist/',
    name: 'userlist',
    component: UserlistView
  },
  {
    path: '/login/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register/',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/404/',
    name: '404',
    component: NotFound
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404/'
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
