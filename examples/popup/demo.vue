<template>
  <div class="weex-demo">
    <text class="button" @click="showPopup = true" style="background-color:#f21818">居中淡入</text>
    <text class="button" @click="showPopup2 = true" style="background-color:yellowgreen">向上弹出</text>
    <text class="button" @click="showPopup3 = true" style="background-color:#3c8dbc">向下弹出</text>
    <weex-popup :show-popup="showPopup" @maskClick="maskClick('居中弹窗')" popup-type="center" @hidePopup="showPopup = false" :default-close=true popup-color="rgba(255,0,0,0.6)">
      <div class="popup center">
        <text class="popup__title">这是一个居中弹窗</text>
        <text class="popup__desc">点击蒙层关闭弹窗(default-close=true)</text>
        <text class="popup__desc">popup-type=center</text>
        <text class="popup__desc">居中弹窗默认显示</text>
        <text class="popup__desc">这里是内容这里是内容</text>
      </div>
    </weex-popup>
    <weex-popup :show-popup="showPopup2" @maskClick="maskClick('向上弹出')" popup-type="bottom" @hidePopup="showPopup2 = false" :default-close=false  popup-color="rgba(0,255,0,0.6)">
      <div class="popup bottom">
        <div class="popup-wrapper">
          <text class="popup__title">这是一个向上弹出的弹窗</text>
          <text class="popup__desc">点击蒙层不可关闭弹窗(default-close=false)</text>
          <text class="popup__desc">popup-type=bottom</text>
          <text class="popup__desc">这里是内容这里是内容</text>
          <text class="popup__desc">这里是内容这里是内容</text>
        </div>
        <text class="popup__close" @click="showPopup2 = false">关闭</text>
      </div>
    </weex-popup>
    <weex-popup :show-popup="showPopup3" @maskClick="maskClick('向下弹出')" popup-type="top" @hidePopup="showPopup3 = false" :default-close=true  popup-color="rgba(0,0,255,0.6)">
      <div class="popup top">
        <div class="popup-wrapper">
          <text class="popup__title">这是一个向下弹出的弹窗</text>
          <text class="popup__desc">点击蒙层不可关闭弹窗(default-close=false)</text>
          <text class="popup__desc">popup-type=top</text>
          <text class="popup__desc">这里是内容这里是内容</text>
          <text class="popup__desc">这里是内容这里是内容</text>
        </div>
        <text class="popup__close" @click="showPopup3 = false">关闭</text>
      </div>
    </weex-popup>
  </div>
</template>
<script>
  import {weexPopup} from 'weex-coms';
  const modal = weex.requireModule('modal');
  export default {
    components: { 
      weexPopup,
    },
    data: {
      showPopup: true,
      showPopup2: false,
      showPopup3: false
    },
    methods: {
      maskClick(str) {
        modal.toast({
          message: `${str}蒙层点击`,
          duration: 0.2
        })
      }
    }
  };
</script>

<style lang="less" scoped>
.weex-demo{
  flex: 1;
}
.button{
    height: 88px;
    line-height: 88px;
    text-align: center;
    border-radius: 10px;
    margin-bottom: 20px;
    margin-top: 20px;
    color: #fff;
} 
.popup{
  background-color: #ffffff;
  align-items: center;
  &__title{
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 24px;
  }
  &__desc{
    font-size: 28px;
    color: #aaa;
    line-height: 40px;
  }
  &__close{
    height: 88px;
    line-height: 88px;
    border-top-color: #ccc;
    border-top-width: 1px;
    border-top-style: solid;
    width: 750px;
    text-align: center;
    margin-top: 24px;
  }
  &-wrapper{
    align-items: center;
  }
}
.center{
   padding: 24px;
   width: 540px;
   border-radius: 10px;
}
.bottom{
  width: 750px;
  padding: 24px 24px 0;
  justify-content: space-between;
  align-items: center;
}
.top{
  width: 750px;
  padding: 24px 24px 0;
  justify-content: space-between;
  align-items: center;
}
</style>