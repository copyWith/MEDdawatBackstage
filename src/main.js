import Vue from 'vue'
import App from './App.vue'
import VueResoure from "vue-resource"
import VueRouter from 'vue-router'
import routes from './route/route.js'

Vue.use(VueResoure);
Vue.use(VueRouter);

const router = new VueRouter({
  routes
});
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
