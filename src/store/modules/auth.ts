import $axios from "@/plugins/axios";
import { createStore } from "vuex";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async fetchLogin({ commit }, data) {
      const res = await $axios.post("/login");
      console.log(res);
    },
  },
  modules: {},
});
