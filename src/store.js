import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    colors: [],
    selectedColors: [],
  },
  getters: {
    getColors(state) {
      // return JSON.parse(JSON.stringify(state.colors));
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
      axios.get("https://getirotel.com/colors.json").then((response) => {
        commit("setColors", response.data);
      });
    },
  },
});

export default store;
