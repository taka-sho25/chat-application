import { createStore } from "vuex";

export default createStore({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload.user;
    }
  },
  actions: {
    setUser(context, value) {
      context.commit("setUser", { user: value });
    }
  },
  modules: {}
});
