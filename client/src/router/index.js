import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
<<<<<<< HEAD
import ShopNow from '../views/shopnow.vue'
=======
import Tnc from '../views/Tnc.vue'
import ShipNreturn from '../views/ShipNreturn.vue'
>>>>>>> 99d8df991f641479d7acd798ff4cdba1d6b921d6
import admin from "./admin"


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
<<<<<<< HEAD
    path: '/shopnow',
    name: 'shopnow',
    component : ShopNow
=======
    path: '/terms',
    name: 'tnc',
    component: Tnc
  },
  {
    path: '/deliverypolicy',
    name: 'shipnreturn',
    component: ShipNreturn
>>>>>>> 99d8df991f641479d7acd798ff4cdba1d6b921d6
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
