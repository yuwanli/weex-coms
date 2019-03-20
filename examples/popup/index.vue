<template>
  <div class="weex-demo">
    <div class="description">
      <text>weex-popup</text>
      <text></text>
    </div>
    <div class="btn" @click="showPopup = true">show</div>
    <weex-popup :show-popup="showPopup" :show-close=true @hidePopup="showPopup = false" :default-close=false>
      <div class="content">
        <text>11111</text>
      </div>
    </weex-popup>
  </div>
</template>
<script>
  import weexPopup from '../../components/weex-popup/index.js';
  export default {
    components: { weexPopup },
    data: () => ({
      showPopup: false
    }),
    methods: {
    }
  };
</script>

<style lang="less" scoped>
.weex-demo{
  flex: 1;
}
.content {
  width: 540px;
  border-radius: 5px;
  padding: 24px 32px;
  background-color: #fff;
}
</style>