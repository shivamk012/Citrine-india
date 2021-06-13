
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import ShopNow from '../views/shopnow.vue'
import Tnc from '../views/Tnc.vue'
import ShipNreturn from '../views/ShipNreturn.vue'
import admin from "./admin"
import GoToCart from '../views/Cart.vue'
import PaySuccess from '../views/paymentsuccess.vue'
import PayFailure from '../views/paymentfailure.vue'
import Payment from '../views/payment.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/shopnow',
    name: 'shopnow',
    component : ShopNow,
  },
  {
    path: '/terms',
    name: 'tnc',
    component: Tnc
  },
  {
    path: '/deliverypolicy',
    name: 'shipnreturn',
    component: ShipNreturn
  },
  {
    path:'/gotocart',
    name : 'gotocart',
    component: GoToCart
  },
  {
    path:'/payment',
    name : 'payment',
    component: Payment
  },
  {
    path:'/paymentsuccess',
    name : 'paymentsuccess',
    component: PaySuccess
  },
  {
    path:'/paymentfailure',
    name : 'paymentfailure',
    component: PayFailure
  },

  ...admin
//   {
//     path: '/songs/create',
//     name: 'create-songs',
//     component: CreateSong
//   },
//   {
//     path: '/songs/:songId/edit',
//     name: 'edit',
//     component: EditSong
//   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
