import { createWebHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Portfolio from './pages/Portfolio.vue'
import PortfolioItem from './pages/PortfolioItem.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/portfolio', component: Portfolio },
  { path: '/portfolio/:id', component: PortfolioItem, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router