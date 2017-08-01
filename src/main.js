// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import  axios from 'axios';
import store from './vuex/store'
import ElementUI from  'element-ui';
import 'element-ui/lib/theme-default/index.css';
import "babel-polyfill";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$axios=axios;
/* eslint-disable no-new */

router.beforeEach((to, from, next)=> {
  if (window.sessionStorage.getItem('username') == null && to.path !== "/login") {
    console.log("jinlai")
    next({path: '/login'})
  } else {
    next()
  }
  ;
})
new Vue({
  el: '#app',
  router,
  store,
  render:h =>h (App)
})
