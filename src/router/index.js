/**
 * Created by txl-pc on 2017/7/22.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index.vue'
Vue.use(Router)

const routes = [
  { path: '/', component: Index }
]
const router = new Router({
  routes // （缩写）相当于 routes: routes
})

export default router
