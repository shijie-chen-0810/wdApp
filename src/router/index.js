import Vue from 'vue'
import VueRouter from 'vue-router'


const Home =  () => import('views/home/homepage/Home')
const HomeZong =  () => import('views/home/Home')
const Detail =  () => import('views/detailpage/Detail')
const Sort =  () => import('views/home/sortpage/Sort')
const Cart =  () => import('views/home/cartpage/Cart')
const Profile =  () => import('views/home/profilepage/Profile')
//profile
import Login from '../views/user/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/wd/home'
  },
  {
    path: '/wd',
    component:HomeZong,
    redirect:'/wd/home',
    children: [
      {
        path: 'home',
        component:Home
      },
      {
        path: 'sort',
        component:Sort
      },
      {
        path: 'cart',
        component:Cart
      },
      {
        path: 'profile',
        component:Profile
      },
    ]
  },
  {
    path: '/detail',
    component:Detail
  },
  {
    path: '/login',
    components: {
      default: Login,
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
