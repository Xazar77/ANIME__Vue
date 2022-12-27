import Vue from 'vue'
import VueRouter from 'vue-router'

import HeroViews from '@/views/HeroView'
import CategoriesView from '@/views/CategoriesView'
import AnimeDetailsView from '@/views/AnimeDetailsView'
import LoginView from '@/views/LoginView'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HeroViews
    },
    {
      path: `/categories`,
      component: CategoriesView
    },
    {
        path: '/anime-details',
        component: AnimeDetailsView
    },

    {
      path: '/login',
      component: LoginView
    }
  ]
})
export default router