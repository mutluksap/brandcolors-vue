<template>
        <div ref="brand" :slug="color.slug" :style="{display: matchedColor}"  :class="{active : activeClass}" class="color">
            <div class="main-info">
                <div @click="selectColor(color)" class="title">
                    <h1>
                        {{color.title}}
                    </h1>
                    <i class="fas fa-check"></i>
                </div>
                <ul>
                    <li :key="acolor" v-for="(acolor, index) in color.colors">
                        <button @click="copyColor(index)" :style="{backgroundColor : '#' + acolor}" class="color-btn">
                            <i class="far fa-file"></i>
                            <span> #{{acolor}} </span>
                        </button>
                        <input ref="input" type="text" :value="'#'+acolor">
                    </li>
                </ul>
            </div>
            <div class="color-detail">
                <span>{{color.modified}}</span>
                <a target="_blank" :href="color.brand_url">Brand URL</a>
                <a target="_blank" :href="color.source_url">Source URL</a>
                <a :href="'/'+ color.slug">Permalink</a>
            </div>
        </div>
</template>

<script>
export default {
    props : ["color", "words"],
    data(){
        return {
            activeClass : false,
            matchedColor: "block",
        }
    },
    methods: {
    copyColor(data){
        this.$refs.input[data].select();
        document.execCommand("copy");
        this.$emit("copied-color", this.$refs.input[data].value);
    },
    selectColor(color){
        this.activeClass = !this.activeClass;
        const control = this.$store.getters.getSelectedColors.find(brand => brand.slug == color.slug);
        if(control){
            this.$store.commit("removeSelectedColors", control);
        }else {
            this.$store.commit("addSelectedColors", color);
        }
    }
  },
  watch: {
    words(value){
        if(this.color.slug.includes(value)){
            this.matchedColor = "block";
        }else {
            this.matchedColor = "none";
        }
    }
  }
}
</script>