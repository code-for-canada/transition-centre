import Vue from 'vue'
import VueRouter from 'vue-router'
import MembersPortal from '../views/MembersPortal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MembersPortal',
    component: MembersPortal
  }
]

const router = new VueRouter({
  routes
})

export default router
