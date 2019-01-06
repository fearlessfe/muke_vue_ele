import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import goods from './components/goods/goods'
import seller from './components/seller/seller'
import ratings from './components/ratings/ratings'
import './common/stylus/index.styl'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
const routes = [
  { path: '/', redirect: '/goods' },
  { path: '/goods', component: goods },
  { path: '/seller', component: seller },
  { path: '/ratings', component: ratings }
]
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})
router.go(1)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
