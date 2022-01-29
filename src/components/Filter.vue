<template>
    <div class="filter">
        <div class="search-bar">
            <i class="fas fa-search"></i>
            <input type="input" placeholder="Search Brands" @keyup="getWords">
        </div>
        <div class="collections">
            <div class="download-collections">
            <ul :class="{active : getSelectedColors.length > 0}">
                <li @click="showSelectedBrands">
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
        <a download="asd.jpg" @click="downloadColors" class="download-colors" href="#">
                <i class="fas fa-download"></i>
                <span>All Brands</span>
        </a>
        </div>
        
    </div>
</template>

<script>
import {mapGetters} from "vuex"
import axios from "axios"
export default {
    methods: {
        getWords(e){
            this.$emit("words", e.target.value);
        },
        removeAllSelectedColors(){
            this.$store.commit("removeAllSelectedColors");
        },
        showSelectedBrands(){
            prompt("Here's the URL to share", "https://localhost:8080/"+ this.$store.getters.getSelectedColorsSlug.join());
        },
        downloadColors(){
             axios({
                    url: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_18.jpg', // File URL Goes Here
                    method: 'GET',
                    responseType: 'blob',
                }).then((res) => {
                    console.log(res);
                     var FILE = window.URL.createObjectURL(new Blob([res.data]));
                     var docUrl = document.createElement('x');
                     docUrl.href = FILE;
                     docUrl.setAttribute('download', 'asd.jpg');
                     document.body.appendChild(docUrl);
                     docUrl.click();
                });
        }
    },
    computed: {
        ...mapGetters(["getSelectedColors"]),
    }
}
</script>