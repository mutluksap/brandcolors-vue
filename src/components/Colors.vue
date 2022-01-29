<template>
    <div class="colors">
        <Color :words="words" @copied-color="dataTransfer" :key="color" :color="color" v-for="color in getColors[0]"></Color>
    </div>
</template>

<script>
import Color from "./Color.vue";
import {mapGetters} from "vuex";
export default {
    props: ["words", "clearAllBrands"],
    components: {
        Color
    },
    methods: {
        dataTransfer(data){
            this.$emit("copiedColor", data);
        }
    },
    computed:{
        ...mapGetters(["getColors"])
    }
}
</script>