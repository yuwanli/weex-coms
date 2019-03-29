<template>
  <div class="weex-demo">
      <text @click="show = true">show</text>
      <div class="wrapper" v-if="show">
          <div class="wrapper__test"><text>111111</text></div>
      </div>
  </div>
</template>
<script>
  export default {
    data: {
        show: false
    },
    methods: {
    }
  };
</script>

<style lang="less" scoped>
.weex-demo{
  flex: 1;
  background-color: #fff;
}
.wrapper{
    position: fixed;
    width: 750px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.6);
    align-items: center;
    justify-content: center;
    &__test{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
    }
}
</style>