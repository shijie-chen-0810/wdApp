import Vue from 'vue'
import VueRouter from 'vue-router'


const Home =  () => import('views/homepage/Home')
const Detail =  () => import('views/detailpage/Detail')
const Sort =  () => import('views/sortpage/Sort')
const Cart =  () => import('views/cartpage/Cart')
const Profile =  () => import('views/profilepage/Profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    component:Home
  },
  {
    path: '/sort',
    component:Sort
  },
  {
    path: '/cart',
    component:Cart
  },
  {
    path: '/profile',
    component:Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
