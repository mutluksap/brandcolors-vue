<template>
    <div class="main">
        <Filter/>
        <Colors/>
    </div>
</template>

<script>
import Colors from "./Colors.vue";
import Filter from "./Filter.vue"
export default {
    components: {
        Filter,
        Colors
    }
}
</script>