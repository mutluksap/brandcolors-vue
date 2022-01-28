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
    getSelectedColors(state) {
      return state.selectedColors;
    },
  },
  mutations: {
    setColors(state, items) {
      state.colors.push(items);
    },
    addSelectedColors(state, color) {
      state.selectedColors.push(color);
    },
    removeSelectedColors(state, index) {
      state.selectedColors.splice(index, 1);
    },
    removeAllSelectedColors(state) {
      state.selectedColors = [];
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
