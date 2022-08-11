import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
import Login from "./Login.vue";

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Login),
}).$mount("#app");
