import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import StreamView from './components/StreamView.vue';

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  /velt-*/
]

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  { path: '/', component: Home as never },
  { path: '/stream-view', component: StreamView as never },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
