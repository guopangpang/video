import Vue from 'vue'
import Router from 'vue-router'
const Player = () => import('../module/video-player/player');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Player',
      component: Player
    }
  ]
})
