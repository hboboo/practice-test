import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Home from '../page/home.vue'
import Item from '../page/item.vue'
import Score from '../page/score.vue'

Vue.use(VueRouter)

const routes = [
 {
  path: '/',
  component: App,
    children: [{
        path: '',
        component: Home
    }, {
        path: '/item',
        component: Item
    },{
        path: '/score',
        component: Score
    }]
 },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
