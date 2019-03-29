<template>
    <div class="description">
        <text class="description__title">{{title}}</text>
        <text class="description__desc">{{desc}}</text>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        title: {
            default: '',
            type: String,
        },
        desc: {
            default: '',
            type: String,
        },
    },
    methods: {
    },
};
</script>

<style lang="less" scoped>
.description{
    padding: 30px 24px;
    &__title{
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    &__desc{
        font-size: 24px;
        color: #aaa;
    }
    border-bottom-width: 10px;
    border-bottom-style: solid;
    border-bottom-color: yellowgreen;
} 
</style>
