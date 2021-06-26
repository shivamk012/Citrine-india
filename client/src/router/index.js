
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import ShopNow from '../views/shopnow.vue'
import Tnc from '../views/Tnc.vue'
import ShipNreturn from '../views/ShipNreturn.vue'
import Catalog from '../views/Catalog.vue'
import ContactInfo from '../views/ContactInfo.vue'
import admin from "./admin"
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import PayResponse from '../views/paymentResponse' 
import Contactinformation from '../views/contactinformation' 
import Cart2 from '../views/cart2' 
import Aboutus from '../views/aboutus' 

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
    path: '/catalog',
    name: 'catalog',
    component: Catalog
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
    // path:'/cart/:name/contact/checkout',
    path:'/checkout',
    name : 'checkout',
    component: Checkout
  },
  {
    path:'/paymentResponse',
    name : 'payResponse',
    component: PayResponse
  },
  {
    path:'/contactinformation',
    name : 'contactinformation',
    component: Contactinformation
  },
  {
    path:'/newcart',
    name : 'newcart',
    component: Cart2
  },
  {
    path:'/aboutus',
    name : 'aboutus',
    component: Aboutus
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
