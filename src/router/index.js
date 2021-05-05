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
      /* webpackChunkName: "plan" */
      '../views/ChecklistPlan.vue'
    )
  },
  {
    path: '/goals',
    name: 'SmartGoals',
    component: () => import(
      /* webpackChunkName: "goals" */
      '../views/SmartGoals.vue'
    )
  },
  {
    path: '/plan2',
    name: 'MembersPlan2',
    component: () => import(
      /* webpackChunkName: "plan2" */
      '../views/ChecklistPlan2.vue'
    )
  },
  {
    path: '/plan3',
    name: 'MembersPlan3',
    component: () => import(
      /* webpackChunkName: "plan3" */
      '../views/ChecklistPlan3.vue'
    )
  },
  {
    path: '/calendar',
    name: 'CalendarView',
    component: () => import(
      /* webpackChunkName: "calendar" */
      '../views/CalendarView.vue'
    )
  },
  {
    path: '/history',
    name: 'ConsultationHistory',
    component: () => import(
      /* webpackChunkName: "history" */
      '../views/ConsultationHistory.vue'
    )
  },
  {
    path: '/schedule',
    name: 'BookConsultation',
    component: () => import(
      /* webpackChunkName: "schedule" */
      '../views/BookConsultation.vue'
    )
  }
]

const router = new VueRouter({
  routes
})

export default router
