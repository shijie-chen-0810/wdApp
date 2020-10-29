import Vue from 'vue'
import VueRouter from 'vue-router'


const Home =  () => import('views/home/homepage/Home')
const HomeSortPage =  () => import('views/homesort/HomeSortPage')
const HomeZong =  () => import('views/home/Home')
const Detail =  () => import('views/detailpage/Detail')
const Comments = () => import('views/detailpage/comments/Comments')
const Sort =  () => import('views/home/sortpage/Sort')
const Cart =  () => import('views/home/cartpage/Cart')
const Profile =  () => import('views/home/profilepage/Profile')
const Err =  () => import('views/err/err')
const Grade =  () => import('views/grade/grade')
//profile
import Userlogin from '../views/user/Userlogin.vue'
import Setpwd from '../views/user/Setpwd.vue'
//Order
import Order from '../views/goodsorder/Order.vue'
import Orderall from '../views/goodsorder/orderdetail/Orderall.vue'
import Comingtake from '../views/goodsorder/orderdetail/Comingtake.vue'
import Comingsend from '../views/goodsorder/orderdetail/Comingsend.vue'
import Comingpay from '../views/goodsorder/orderdetail/Comingpay.vue'
import Comingcommit from '../views/goodsorder/orderdetail/Comingcommit.vue'

import $store from 'store'

import { islogin } from 'network/commonRequest/commonRequest'

Vue.use(VueRouter)


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}


const routes = [
  {
    path: '/',
    component: HomeZong,
    redirect: '/home',
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
        component:Profile,
      },
      {
        path: 'grade',
        name:'grade',
        component:Grade
      },
    ]
  },
  {
    path: '/err',
    name:'err',
    component:Err
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
    path: '/setpwd',
    component: Setpwd
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
  },
  {
    path: '/comments/:id',
    name: 'comments',
    component: Comments
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {  
    from.name ? next({ name:from.name}) : next({path:'/err'}); 
  } else {
    next();
  }
  
}) 
router.beforeEach(async (to, from, next) => {
  if($store.state.islogin)return next()
  const result = await islogin()
  if (result.code === 200) {
    $store.commit('changeislogin', { islogin: true })
    const cellphonenumber = JSON.parse(result.msg).username
    $store.commit('changephonenumroot',{cellphonenumber})
  }
  // 
  next()
}) 


export default router
