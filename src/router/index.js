import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '@/views/LandingPage'
import About from '@/views/About'
import ProductDetail from '@/views/ProductDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
