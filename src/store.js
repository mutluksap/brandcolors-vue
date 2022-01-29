import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    colors: [],
    selectedColors: [],
    selectedColorsSlug: [],
  },
  getters: {
    getColors(state) {
      return state.colors;
    },
    getSelectedColors(state) {
      return state.selectedColors;
    },
    getSelectedColorsSlug(state) {
      return state.selectedColorsSlug;
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
    addSelectedColorsSlug(state, slug) {
      state.selectedColorsSlug.push(slug);
    },
    removeSelectedColorsSlug(state, slug) {
      state.selectedColorsSlug.splice(slug, 1);
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
