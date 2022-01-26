<template>
    <div class="main">
        <Filter/>
        <Colors/>
        <CopyBox/>
    </div>
</template>

<script>
import Colors from "./Colors.vue";
import Filter from "./Filter.vue"
import CopyBox from "./CopyBox.vue"
export default {
    components: {
        Filter,
        Colors,
        CopyBox
    }
}
</script>