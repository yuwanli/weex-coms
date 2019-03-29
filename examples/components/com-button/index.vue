<template>
    <text class="button" @click="click" :style="{'background-color':bgColor,'color':color}">{{text}}</text>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        bgColor: {
            default: '#000',
            type: String,
        },
        color: {
            default: '#fff',
            type: String,
        },
        text: {
            default: '',
            type: String,
        }
    },
    methods: {
        click() {
            this.$emit('click')
        }
    },
};
</script>

<style lang="less" scoped>
.button{
    height: 88px;
    line-height: 88px;
    text-align: center;
    border-radius: 10px;
    margin-bottom: 20px;
    margin-top: 20px;
} 
</style>
