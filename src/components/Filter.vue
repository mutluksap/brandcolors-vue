<template>
    <div class="filter">
        <div class="search-bar">
            <i class="fas fa-search"></i>
            <input type="input" placeholder="Search Brands" @keyup="getWords">
        </div>
        <div class="collections">
            <div class="download-collections">
            <ul>
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
                <li>
                    <a href="#">
                        <i class="fas fa-times"></i>
                    </a>
                </li>
                <span>
                    0 brands collected
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
export default {
    methods: {
        getWords(e){
            this.$emit("words", e.target.value);
        }
    }
}
</script>