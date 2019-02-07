import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Rankings = () => import('~/pages/rankings.vue').then(m => m.default || m)
const AppDetail = () => import('~/pages/app_detail.vue').then(m => m.default || m)
const AppSubmit = () => import('~/pages/app_submit.vue').then(m => m.default || m)
const AppEdit = () => import('~/pages/app_edit.vue').then(m => m.default || m)
const Documentation = () => import('~/pages/documentation.vue').then(m => m.default || m)
const TOS = () => import('~/pages/tos.vue').then(m => m.default || m)

const scrollBehavior = function(to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (
          typeof window.CSS !== 'undefined' &&
          typeof window.CSS.escape !== 'undefined'
        ) {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn(
            'Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).'
          )
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  const router = new Router({
    mode: 'history',
    base: '/',
    scrollBehavior,
    routes: [
      {
        path: '/',
        component: Rankings,
        name: 'rankings'
      },
      {
        path: '/type/:type',
        component: Rankings,
        name: 'rankings-type'
      },
      {
        path: '/category/:category',
        component: Rankings,
        name: 'rankings-category'
      },
      {
        path: '/apps/',
        redirect: '/'
      },
      {
        path: '/apps/:name',
        component: AppDetail,
        name: 'app-detail'
      },
      {
        path: '/apps/submit/new',
        component: AppSubmit,
        name: 'apps-new'
      },
      {
        path: '/apps/edit/:name',
        component: AppEdit,
        name: 'apps-edit'
      },
      {
        path: '/documentation',
        component: Documentation,
        name: 'documentation'
      },
      {
        path: '/tos',
        component: TOS,
        name: 'tos'
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
      */
    ],
    fallback: false
  })


  return router
}