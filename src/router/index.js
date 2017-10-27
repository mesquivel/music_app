import Vue from 'vue'
import Router from 'vue-router'
import homeComponent from '@/components/HomeComponent/HomeComponent'
import AdminComponent from '@/components/AdminComponent/AdminComponent'
import SongsComponent from '@/components/SongsComponent/SongsComponent'
import ShowComponent from '@/components/ShowComponent/ShowComponent'
import NigolComponent from '@/components/NigolComponent/NigolComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/nigol',
      name: 'NigolComponent',
      component: NigolComponent
    },
    {
      path: '/home',
      name: 'HomeComponent',
      component: homeComponent
    },
    {
      path: '/',
      name: 'AdminComponent',
      component: AdminComponent,
      children: [
        {
          path: '/admin/songs',
          name: 'SongsComponent',
          component: SongsComponent
        },
        {
          path: '/admin/shows',
          name: 'ShowComponent',
          component: ShowComponent
        }
      ]
    }
  ]
})
