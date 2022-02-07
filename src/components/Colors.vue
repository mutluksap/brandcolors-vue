<template>
  <div v-if="$route.params.color" class="colors">
    <div :slug="ColorDetail.slug" class="active color">
      <div class="main-info">
        <div class="title">
          <h1>{{ ColorDetail.title }}</h1>
          <i class="fas fa-check" aria-hidden="true"></i>
        </div>
        <ul>
          <li :key="colors" v-for="(colors, index) in ColorDetail.colors">
            <button
              @click="copyColor(index)"
              class="color-btn"
              :style="{ backgroundColor: '#' + colors }"
            >
              <i class="far fa-file" aria-hidden="true"></i
              ><span> #{{ colors }} </span>
            </button>
            <input ref="input" type="text" :value="'#' + colors" />
          </li>
        </ul>
      </div>
      <div class="color-detail">
        <span>{{ ColorDetail.modified }}</span
        ><a target="_blank" :href="ColorDetail.brand_url">Brand URL</a
        ><a target="_blank" :href="ColorDetail.source_url">Source URL</a>
      </div>
    </div>
  </div>
  <div class="colors" v-else-if="$route.params.colors">
    <div
      :key="color"
      v-for="color in responseURL"
      :slug="color.slug"
      class="active color"
    >
      <div class="main-info">
        <div class="title">
          <h1>{{ color.title }}</h1>
          <i class="fas fa-check" aria-hidden="true"></i>
        </div>
        <ul>
          <li :key="colors" v-for="(colors, index) in color.colors">
            <button
              @click="copyColor(index)"
              class="color-btn"
              :style="{ backgroundColor: '#' + colors }"
            >
              <i class="far fa-file" aria-hidden="true"></i
              ><span> #{{ colors }} </span>
            </button>
            <input ref="input" type="text" :value="'#' + colors" />
          </li>
        </ul>
      </div>
      <div class="color-detail">
        <span>{{ color.modified }}</span
        ><a target="_blank" :href="color.brand_url">Brand URL</a
        ><a target="_blank" :href="color.source_url">Source URL</a>
      </div>
    </div>
  </div>
  <div v-else class="colors">
    <color
      :clearColor="allColorClear"
      @colorDetail="ColorDetail = $event"
      :words="words"
      @copied-color="dataTransfer"
      :key="color"
      :color="color"
      v-for="color in getColors[0]"
    ></color>
  </div>
</template>

<script>
import Color from "./Color.vue";
import { mapGetters } from "vuex";
export default {
  props: ["words", "clearAllBrands", "allColorClear"],
  components: {
    Color,
  },
  data() {
    return {
      ColorDetail: "",
      colorUrl: this.$route.params.color,
      colorsURL: this.$route.params.colors,
      selectColors: null,
      responseURL: [],
    };
  },
  methods: {
    dataTransfer(data) {
      this.$emit("copiedColor", data);
    },
    copyColor(data) {
      this.$refs.input[data].select();
      document.execCommand("copy");
      this.$emit("copied-color", this.$refs.input[data].value);
    },
  },
  computed: {
    ...mapGetters(["getColors"]),
  },
  created() {
    if (this.$route.params.color) {
      let colors = Object.values(this.$store.getters.getColors[0]);
      let res = colors.filter((brand) => {
        return brand.slug == this.$route.params.color;
      });
      this.ColorDetail = res[0];
    }
    if (this.$route.params.colors) {
      this.selectColors = this.$route.params.colors.split(",");
      let allColors = Object.values(this.$store.getters.getColors[0]);
      this.selectColors.forEach((brand) => {
        let response = allColors.find((element) => {
          return element.slug == brand;
        });
        this.responseURL.push(response);
        this.$store.commit("addSelectedColors", response);
      });
    }
  },
};
</script>
