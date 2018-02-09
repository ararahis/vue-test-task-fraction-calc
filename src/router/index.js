import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import FractionCalc from '@/components/FractionCalc'
import Websocket from '@/components/Websocket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/fraction',
      name: 'FractionCalc',
      component: FractionCalc
    },
    {
      path: '/websocket',
      name: 'Websocket',
      component: Websocket
    }
  ]
})
