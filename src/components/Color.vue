<template>
    <div>
        <div class="color">
            <div class="main-info">
                <div class="title">
                    <h1>
                        {{color.title}}
                    </h1>
                    <i class="fas fa-check"></i>
                </div>
                <ul>
                    <li :key="acolor" v-for="acolor in color.colors">
                        <button :style="{backgroundColor : '#' + acolor}" class="color-btn">
                            <i class="far fa-file"></i>
                        </button>
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
    </div>
</template>

<script>
export default {
    props : ["color"]
}
</script>