<template>
  <div class="filter">
    <div class="search-bar">
      <i class="fas fa-search"></i>
      <input type="input" placeholder="Search Brands" @keyup="getWords" />
    </div>
    <div class="collections">
      <div class="download-collections">
        <ul :class="{ active: getSelectedColors.length > 0 }">
          <li @click="showSelectedBrands">
            <a href="#">
              <i class="fas fa-link"></i>
            </a>
          </li>
          <li @click.prevent="removeAllSelectedColors">
            <a href="#">
              <i class="fas fa-times"></i>
            </a>
          </li>
          <span> {{ getSelectedColors.length }} brands collected </span>
        </ul>
      </div>
      <select
        :class="{ active: getSelectedColors.length > 0 }"
        @change="downloadColors"
        v-model="version"
      >
        <option value="" disabled>Download Selected Colors</option>
        <option
          :value="option.toLowerCase()"
          :key="option"
          v-for="option in options"
        >
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      version: "",
      selectedColorsCode: "",
      symbol: "",
      options: ["CSS", "LESS", "SCSS"],
    };
  },
  methods: {
    getWords(e) {
      this.$emit("words", e.target.value);
    },
    removeAllSelectedColors() {
      this.$store.commit("removeAllSelectedColors");
    },
    showSelectedBrands() {
      if (this.$store.getters.getSelectedColors.length > 0) {
        prompt(
          "Here's the URL to share",
          "https://localhost:8080/" +
            this.$store.getters.getSelectedColorsSlug.join()
        );
      }
    },
    downloadColors() {
      if (this.$store.getters.getSelectedColors.length > 0) {
        let colors = this.$store.getters.getSelectedColors;

        switch (this.version) {
          case "css":
            this.symbol = "--";
            colors.forEach((brand) => {
              brand.colors.forEach((code, index) => {
                this.selectedColorsCode += `.bc-background-${brand.slug}-${index}  {background-color: #${code};}\n`;
              });
            });
            break;
          case "scss":
            this.symbol = "$";
            colors.forEach((brand) => {
              brand.colors.forEach((code, index) => {
                this.selectedColorsCode += `${this.symbol}bc-${brand.slug}-${index}: #${code};\n`;
              });
            });
            break;
          case "less":
            this.symbol = "@";
            colors.forEach((brand) => {
              brand.colors.forEach((code, index) => {
                this.selectedColorsCode += `${this.symbol}${brand.slug}-${index}: #${code};\n`;
              });
            });
            break;
        }

        //Download code
        let text = this.selectedColorsCode;
        let filename = "colors." + this.version;
        let element = document.createElement("a");
        element.setAttribute(
          "href",
          "data:application/json;charset=utf-8," + encodeURIComponent(text)
        );
        element.setAttribute("download", filename);

        element.style.display = "none";
        document.body.appendChild(element);

        element.click();
        document.body.removeChild(element);

        this.selectedColorsCode = "";
      } else {
        alert("Please select a color for download.");
      }
    },
  },
  computed: {
    ...mapGetters(["getSelectedColors"]),
  },
};
</script>
