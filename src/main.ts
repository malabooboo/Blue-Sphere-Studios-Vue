import Vue from 'vue';
import App from './app.vue';
import router from './router';
import vueSmoothScroll from 'vue-smooth-scroll';

Vue.config.productionTip = false;
Vue.use(vueSmoothScroll);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
