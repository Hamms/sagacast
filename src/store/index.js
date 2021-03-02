import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: []
  },
  mutations: {
    addImages(state, images) {
      state.images.push(...images);
    }
  },
  actions: {},
  modules: {}
});
