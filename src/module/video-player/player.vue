<template>
    <div>
        <div class="screen">
            <span v-for="(item, index) in textList" style="translate:translate(100px,20px);">{{item.text}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                textList:[{text:'这是一条弹幕1'},{text:'这是一条弹幕2'}],
            }
        },
        methods:{

        }
    }
</script>

<style>
    .screen{
        width: 800px;
        height: 500px;
        background-color: orange;
    }
</style>

