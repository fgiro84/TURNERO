// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedOption: 'Tienda: Vicente López',
  },
  mutations: {
    setSelectedOption(state, option) {
      state.selectedOption = option;
    },
  },
  actions: {
    updateSelectedOption({ commit }, option) {
      commit('setSelectedOption', option);
    },
  },
});
