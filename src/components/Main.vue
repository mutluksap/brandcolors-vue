<template>
    <div class="main">
        <Filter @words="words" />
        <Colors :words="searchedColor" @copiedColor="cameData"/>
        <CopyBox :colorTransfer="copyColor"/>
    </div>
</template>

<script>
import Colors from "./Colors.vue";
import Filter from "./Filter.vue"
import CopyBox from "./CopyBox.vue"
export default {
    data(){
        return {
            copyColor : null,
            searchedColor: "",
        }
    },
    components: {
        Filter,
        Colors,
        CopyBox
    },
    methods: {
        cameData(data){
            this.copyColor = data;
        },
        words(data){
            this.searchedColor = data;
        }
    }
}
</script>