import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Todo-list',
    name: 'TodoList',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoList.vue')
  },
  {
    path: '/issue-list',
    name: 'IssueList',
    component: () => import(/* webpackChunkName: "about" */ '../views/IssueList.vue')
  },
  {
    path: '/todos-issues',
    name: 'TodosIssues',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodosIssues.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
