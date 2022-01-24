import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    colors: [],
  },
  getters: {
    getColors(state) {
      return state.colors;
    },
  },
  mutations: {
    setColors(state, items) {
      state.colors.push(items);
    },
  },
  actions: {
    getAllColors({ commit }) {
      axios.get("../../colors.json").then((response) => {
        commit.setColors(response);
      });
    },
  },
});

export default store;
