<template>
  <div class="main">
    <Filter @allColorClear="fromChild = $event" @words="words" />
    <Colors
      :allColorClear="fromChild"
      :words="searchedColor"
      @copiedColor="cameData"
    />
    <CopyBox :colorTransfer="copyColor" />
  </div>
</template>

<script>
import Colors from "./Colors.vue";
import Filter from "./Filter.vue";
import CopyBox from "./CopyBox.vue";
export default {
  data() {
    return {
      copyColor: null,
      searchedColor: "",
      fromChild: "",
    };
  },
  components: {
    Filter,
    Colors,
    CopyBox,
  },
  methods: {
    cameData(data) {
      this.copyColor = data;
    },
    words(data) {
      this.searchedColor = data;
    },
  },
};
</script>
