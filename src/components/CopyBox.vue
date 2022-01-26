<template>
    <div :style="{'visibility': visible}" class="copied">
        <span>
            Copied <b>{{colorTransfer}}</b> to clipboard
        </span>
    </div>
</template>

<script>
export default {
    props : ["colorTransfer"],
    data(){
        return{
            visible: 'hidden'
        }
    },
    watch: {
        colorTransfer(){
            this.visible = 'visible'; 
            var vm = this;
            setTimeout(() => {
                vm.visible = 'hidden';
            }, 1500);
        }
    }
}
</script>