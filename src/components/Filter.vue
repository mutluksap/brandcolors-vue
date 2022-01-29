<template>
    <div class="filter">
        <div class="search-bar">
            <i class="fas fa-search"></i>
            <input type="input" placeholder="Search Brands" @keyup="getWords">
        </div>
        <div class="collections">
            <div class="download-collections">
            <ul :class="{active : getSelectedColors.length > 0}">
                <li>
                    <a href="#">
                        <i class="fas fa-download"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-link"></i>
                    </a>
                </li>
                <li @click.prevent="removeAllSelectedColors">
                    <a href="#">
                        <i class="fas fa-times"></i>
                    </a>
                </li>
                <span>
                    {{getSelectedColors.length}} brands collected
                </span>
            </ul>
            
        </div>
        <a class="download-colors" href="#">
                <i class="fas fa-download"></i>
                <span>All Brands</span>
        </a>
        </div>
        
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    methods: {
        getWords(e){
            this.$emit("words", e.target.value);
        },
        removeAllSelectedColors(){
            this.$store.commit("removeAllSelectedColors");
        }
    },
    computed: {
        ...mapGetters(["getSelectedColors"]),
    }
}
</script>