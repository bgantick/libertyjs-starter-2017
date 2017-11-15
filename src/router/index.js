import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/NotFound'
import TheIndex from '@/components/TheIndex'
import TheList from '@/components/TheList'
import TheShow from '@/components/TheShow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/',
      name: 'index',
      component: TheIndex
    },
    {
      path: '/list',
      name: 'list',
      component: TheList
    },
    {
      path: '/movies/:id',
      name: 'movie',
      props: true,
      component: TheShow
    }
  ]
})
