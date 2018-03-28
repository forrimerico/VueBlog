import Vue from 'vue'
import Router from 'vue-router'
import common from '../components/common/common'

Vue.use(Router)
Vue.use(common)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: resolve => require(['../components/Home.vue'], resolve)
    }
  ]
})
