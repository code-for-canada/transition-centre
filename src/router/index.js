import Vue from 'vue'
import VueRouter from 'vue-router'
import MembersPortal from '../views/MembersPortal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MembersPortal',
    component: MembersPortal,
    meta: {
      breadcrumb: [
        {name: 'My Digital Transition Portal', link: '/'}
      ]
    }
  },
  {
    path: '/plan',
    name: 'MembersPlan',
    component: () => import(
      /* webpackChunkName: "plan" */
      '../views/ChecklistPlan.vue'
    ),
    meta: {
      breadcrumb: [
        {name: 'My Digital Transition Portal', link: '/'},
        {name: 'My Transition Plan', link: '/plan'}
      ]
    }
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
  },
  {
    path: '/documents',
    name: 'DocumentsCentre',
    component: () => import(
      /* webpackChunkName: "documents" */
      '../views/DocumentsCentre.vue'
    )
  },
  {
    path: '/notes',
    name: 'NotesCentre',
    component: () => import(
      /* webpackChunkName: "notes" */
      '../views/NotesCentre.vue'
    )
  },
  {
    path: '/staff',
    name: 'StaffProfile',
    component: () => import(
      /* webpackChunkName: "staff" */
      '../views/StaffProfile.vue'
    )
  }
]

const router = new VueRouter({
  routes
})

export default router
