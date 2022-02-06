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
    {{ colorsURL }}
  </div>
  <div v-else class="colors">
    <Color
      :clearColor="allColorClear"
      @colorDetail="ColorDetail = $event"
      :words="words"
      @copied-color="dataTransfer"
      :key="color"
      :color="color"
      v-for="color in getColors[0]"
    ></Color>
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
      console.log(this.$route.params.color);
      let res = colors.filter((brand) => {
        return brand.slug == this.$route.params.color;
      });
      this.ColorDetail = res[0];
    }
    console.log(this.$route.params);
  },
};
</script>
