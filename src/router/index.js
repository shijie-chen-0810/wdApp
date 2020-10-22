import Vue from 'vue'
import VueRouter from 'vue-router'


const Home =  () => import('views/home/homepage/Home')
const HomeZong =  () => import('views/home/Home')
const Detail =  () => import('views/detailpage/Detail')
const Sort =  () => import('views/home/sortpage/Sort')
const Cart =  () => import('views/home/cartpage/Cart')
const Profile =  () => import('views/home/profilepage/Profile')
//profile
import Userlogin from '../views/user/Userlogin.vue'
//Order
import Order from '../views/goodsorder/Order.vue'
import Orderall from '../views/goodsorder/orderdetail/Orderall.vue'
import Comingtake from '../views/goodsorder/orderdetail/Comingtake.vue'
import Comingsend from '../views/goodsorder/orderdetail/Comingsend.vue'
import Comingpay from '../views/goodsorder/orderdetail/Comingpay.vue'
import Comingcommit from '../views/goodsorder/orderdetail/Comingcommit.vue'

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
    component: Userlogin
  },
  {
    path: '/order',
    component: Order,
    redirect:'/order/:id',
    children:[
      { 
        path:'all',
        component:Orderall
      },
      { 
        path:'take',
        component:Comingtake
      },
      { 
        path:'pay',
        component:Comingpay
      },
      { 
        path:'send',
        component:Comingsend
      },
      { 
        path:'commit',
        component:Comingcommit
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
