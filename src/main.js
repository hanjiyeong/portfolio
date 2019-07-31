import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAnalytics from "vue-analytics";
import VueScrollTo from 'vue-scrollto';
import TopNavigation from './components/Nav';

Vue.component('TopNav', TopNavigation)

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: "UA-144930165-1",
  autoTracking: {
    screenview: true
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
