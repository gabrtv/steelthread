import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Rating from '@/components/Rating'
import Leaderboard from '@/components/Leaderboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/rating',
      name: 'Rating',
      component: Rating
    },
    {
      path: '/leaderboard',
      name: 'Leaderboard',
      component: Leaderboard
    }
  ]
})
