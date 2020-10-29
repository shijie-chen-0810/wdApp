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

import $store from 'store'

Vue.use(VueRouter)


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}


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
        component:Sort,
      },
      {
        path: 'cart',
        component: Cart,
        beforeEnter(to, from, next) {
          if ($store.state.islogin) {
            next()
          } else {
            next({path:'/login'})
          }
        }
      },
      {
        path: 'profile',
        name:'profile',
        component:Profile
      },
    ]
  },
  {
    path:'/pay',
    component:()=>import('views/home/cartpage/pay/Pay')
  },
  {
    path:'/cart/see',
    component:()=>import('views/home/cartpage/see/See')
  },
  {
    path:'/cart/pay',
    component:()=>import('views/home/cartpage/payprice/Payprice')
  },
  {
    path: '/detail/:id',
    name:'detail',
    component:Detail
  },
  {
    path: '/homesort/:sortType',
    name:'homesort',
    component:HomeSortPage
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
