import Vue from 'vue'
import VueRouter from 'vue-router'
import MembersPortal from '../views/MembersPortal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MembersPortal',
    component: MembersPortal
  },
  {
    path: '/plan',
    name: 'MembersPlan',
    component: () => import(
      /* webpackChunkName: "plan" */ '../views/ChecklistPlan.vue'
    )
  },
  {
    path: '/goals',
    name: 'SmartGoals',
    component: () => import(
      /* webpackChunkName: "goals" */ '../views/SmartGoals.vue'
    )
  },
  {
    path: '/plan2',
    name: 'MembersPlan2',
    component: () => import(
      /* webpackChunkName: "plan2" */ '../views/ChecklistPlan2.vue'
    )
  }
]

const router = new VueRouter({
  routes
})

export default router
