<template>
    <div class="colors">
        <Color></Color>
        {{getColors}}
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