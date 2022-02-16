
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage/Home.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import ShopNow from '../views/shopnow.vue'
import Tnc from '../views/Tnc.vue'
import ShipNreturn from '../views/ShipNreturn.vue'
import Collections from '../views/Collections.vue'
import CollectionsType from '../views/CollectionsType.vue'
import ContactInfo from '../views/ContactInfo.vue'
import admin from "./admin"
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import PayResponse from '../views/paymentResponse'
import Dashboard from '../views/user/Dashboard.vue'
import PreviousOrders from '../views/user/PreviousOrders.vue'
import Jewelry from '../views/Jewelry.vue'
import Store from '../views/Store.vue'
import Rakhi from '../views/Rakhi.vue'
import RakhiTypes from '../views/RakhiTypes.vue'
import AboutUs from '../views/AboutUs.vue'

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
    path: '/collections',
    name: 'collections',
    component: Collections
  },
  {
    path: '/collections/:cName',
    name: 'collectionType',
    component: CollectionsType
  },
  {
    path: '/catalog/:pname',
    name: 'shopnow',
    component : ShopNow,
  },
  {
    path: '/cart/:name/contact',
    name: 'contactInfo',
    component : ContactInfo,
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
    path:'/:user/cart',
    name : 'cart',
    component: Cart
  },
  {
    path:'/cart/:name/contact/checkout',
    name : 'checkout',
    component: Checkout
  },
  {
    path:'/paymentResponse',
    name : 'payResponse',
    component: PayResponse
  },
  {
    path:'/dashboard',
    name : 'dashboard',
    component: Dashboard
  },
  {
    path:'/dashboard/previousorders',
    name : 'previousorders',
    component: PreviousOrders
  },
  {
    path:'/jewelery',
    name : 'jewelry',
    component: Jewelry
  },
  {
    path:'/jewelery/:item',
    name : 'store',
    component: Store
  },
  {
    path:'/rakhi',
    name : 'rakhi',
    component: Rakhi
  },
  {
    path:'/rakhi/:item',
    name : 'rakhistore',
    component: RakhiTypes
  },
  {
    path:'/about',
    name : 'about',
    component: AboutUs
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
