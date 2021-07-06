import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV === "development",
  state: {
    account: {},
    plan: {},
    status: {
      account: {
        loading: false,
        error: false,
      },
    },
  },
  mutations: {
    SET_ACCOUNT(state, account) {
      state.account = account;
    },
  },
  actions: {
    getAccount({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("/api/member/account")
          .then((response) => {
            commit("SET_ACCOUNT", response.data);
            resolve();
          })
          .catch((error) => {
            console.log(error);
            reject();
          });
      });
    },
    updateAccount({ commit }, account) {
      return new Promise((resolve, reject) => {
        axios
          .put("/api/member/account", account)
          .then((response) => {
            console.log(response);
            commit("SET_ACCOUNT", account);
            resolve();
          })
          .catch((error) => {
            console.log(error);
            reject();
          });
      });
    },
  },
  modules: {},
});
