import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
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
