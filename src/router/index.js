import Vue from 'vue'
import Router from 'vue-router'
import TestComponent from '@/components/TestComponent/TestComponent'
import RouteTestComponent from '@/components/RouteTestComponent/RouteTestComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TestComponent',
      component: TestComponent
    },
    {
      path: '/about',
      name: 'RouteTestComponent',
      component: RouteTestComponent
    }
  ]
})
