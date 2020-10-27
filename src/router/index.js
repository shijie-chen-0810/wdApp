import Vue from 'vue'
import VueRouter from 'vue-router'


const Home =  () => import('views/home/homepage/Home')
const HomeSortPage =  () => import('views/homesort/HomeSortPage')
const HomeZong =  () => import('views/home/Home')
const Detail =  () => import('views/detailpage/Detail')
const Sort =  () => import('views/home/sortpage/Sort')
const Cart =  () => import('views/home/cartpage/Cart')
const Profile =  () => import('views/home/profilepage/Profile')
const Err =  () => import('views/err/err')
const Grade =  () => import('views/grade/grade')
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
    component:HomeZong,
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
        component:Cart,
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
  routes,
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.length ===0) {  
//     from.path? next({ path:from.path}) : next('/err'); 
//   } else {
//     next()
//   }
// }) 

// router.beforeEach((to, from, next) => {
//   // 此处判断条件我有看到其他人用to.matched.length ===0进行判断， 具体的还有待进一步验证，大体的思路就是这样的
//   if (to.fullPath === '/') { 
//     from.path ? next({ path:from.path }) : next('/err');   
//   } else {
//       next(); //如果匹配到正确跳转
//   }
// });

export default router
