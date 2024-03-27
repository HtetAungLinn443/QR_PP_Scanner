import { createStore } from "vuex";
import fetchLogin from "@/store/modules/auth";
export default createStore({
  state: {
    token: "",
    isLoading: false,
  },
  getters: {
    getToken: (state) => state.token,
    isLoading: (state) => state.isLoading,
  },
  mutations: {
    setLoadingState(state, data) {
      state.isLoading = data;
    },
  },
  actions: {
    showLoading({ commit }) {
      commit("setLoadingState", true);
    },
    stopLoading({ commit }) {
      commit("setLoadingState", false);
    },
  },
  modules: {
    fetchLogin,
  },
});
