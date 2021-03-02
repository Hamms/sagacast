import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

const container = document.getElementById("main");
const component = new Vue({
  store,
  render: h => h(App)
}).$mount();

container.appendChild(component.$el);
