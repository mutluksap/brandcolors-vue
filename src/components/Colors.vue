<template>
    <div class="colors">
        <Color :key="color" :color="color" v-for="color in getColors[0]"></Color>
    </div>
</template>

<script>
import Color from "./Color.vue";
import {mapGetters} from "vuex";
export default {
    components: {
        Color
    },
    computed:{
        ...mapGetters(["getColors"])
    }
}
</script>