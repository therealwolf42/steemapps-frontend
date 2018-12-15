import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Rankings = () => import('~/pages/Rankings.vue').then(m => m.default || m)

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    //linkActiveClass: 'nuxt-link-active',
    //linkExactActiveClass: 'nuxt-link-exact-active',
    //scrollBehavior,
    routes: [
      {
        path: '/',
        component: Rankings,
        name: 'home'
      },
      /*{
        path: '/about',
        component: About,
        name: 'about'
      },*/
      /*{
        path: '/rankings',
        component: Rankings,
        name: 'rankings'
      },
      {
        path: '/rankings/category/:category',
        component: Rankings,
        name: 'rankings-category'
      }*/
    ],
    fallback: false
  })
}
