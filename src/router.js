import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Index.vue'
import Resume from './components/Resume.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/resume/:lang',
    name: 'Resume',
    component: Resume,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
