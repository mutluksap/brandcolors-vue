<template>
        <div @click="activeClass = !activeClass" :class="{active : activeClass}" class="color">
            <div class="main-info">
                <div class="title">
                    <h1>
                        {{color.title}}
                    </h1>
                    <i class="fas fa-check"></i>
                </div>
                <ul>
                    <li :key="acolor" v-for="acolor in color.colors">
                        <button @click="copyColor" :style="{backgroundColor : '#' + acolor}" class="color-btn">
                            <i class="far fa-file"></i>
                        </button>
                        <input ref="input" type="text" :value="'#'+acolor">
                    </li>
                </ul>
            </div>
            <div class="color-detail">
                <span>{{color.modified}}</span>
                <a target="_blank" :href="color.brand_url">Brand URL</a>
                <a target="_blank" :href="color.source_url">Source URL</a>
                <a href="">Permalink</a>
            </div>
        </div>
</template>

<script>
export default {
    props : ["color"],
    data(){
        return {
            activeClass : false,
            message: ""
        }
    },
    methods: {
    copyColor(){
        console.log(this.$refs);
        // const data = this.$refs.input.select();
        // console.log(data);
        // document.execCommand("copy");
    }
  }
}
</script>