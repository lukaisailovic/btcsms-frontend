import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'
import Register from '@/views/Register'
import SignIn from '@/views/SignIn'
import guestGuard from './guestGuard'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

    {
        path: '*',
        redirect: '/',
    },
    {
      path: '/',
      name: 'welcome',
      component: Hello
    },
    {
      path: '/auth/signin',
      name: 'signin',
      component: SignIn,
      beforeEnter: guestGuard
    },
    {
      path: '/auth/register',
      name: 'register',
      component: Register,
      beforeEnter: guestGuard
    }
  ]
})