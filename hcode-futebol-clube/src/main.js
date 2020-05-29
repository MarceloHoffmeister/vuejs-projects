import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store/store'
import router from './router/routes'
import App from './App.vue'

Vue.use(Vue2Filters)

Vue.config.productionTip = false

/* router.beforeEach((to, from, next) => {
  console.log(to, from);
  next();
})

router.afterEach(() => {
  console.log('Renderização OK');
}) */

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
