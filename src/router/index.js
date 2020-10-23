import Vue from 'vue'
import VueRouter from 'vue-router'



const Home =  () => import('views/home/homepage/Home')
const HomeSortPage =  () => import('views/homesort/HomeSortPage')
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
    redirect: '/home',
    component:HomeZong,
    children: [
      {
        path: 'home',
        component:Home
      },
      {
        path: 'sort',
        component: Sort
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
    path: '/detail/:id',
    name:'detail',
    component:Detail
  },
  {
    path:'/pay',
    component:()=>import('views/home/cartpage/pay/Pay')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
