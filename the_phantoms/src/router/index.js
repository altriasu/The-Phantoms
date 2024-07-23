import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import myPalace from '../views/myPalace.vue'
import FightView from '../views/FightView.vue'
import RegisterView from '../views/RegisterView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mypalace',
    name: 'mypalace',
    component: myPalace
  },
  {
    path: '/fight',
    name: 'fight',
    component: FightView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
