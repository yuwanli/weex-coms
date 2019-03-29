<template>
    <div class="content">
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
    },
    methods: {
    },
};
</script>

<style lang="less" scoped>
.content{
    padding: 24px;
    flex: 1;
    justify-content: center;
} 
</style>
