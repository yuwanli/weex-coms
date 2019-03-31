<template>
  <div class="weex-demo">
      <text>11111</text>
      <div class="test-wrapper">
          <image
            slot="before"
            class="test-label"
            src="http://h0.hucdn.com/open/201904/3db5bf7affe4900c_36x36.png"></image>
            <weex-lamp class="test" :container-style="containerStyle" :lamp-data="lampData" :item-style="itemStyle" :ani-time="aniTime" :stop-time="stopTime" ref="lamp1">
                <div slot="item" class="test-item" slot-scope="{data}">
                    <image src="https://mirror-gold-cdn.xitu.io/168e085848dee33b37a?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1" class="test-img"></image>
                    <text :style="itemStyle">{{data}}</text>
                </div>
            </weex-lamp>
      </div>
    

    <text class="text">以下是另一种形式跑马灯</text>
    <weex-lamp :container-style="containerStyle1" :lamp-data="lampData" :item-style="itemStyle1" :ani-time="aniTime" :lamp-type="lampType" ref="lamp2">
    </weex-lamp>
  </div>
</template>
<script>
  import weexLamp from '../../components/weex-lamp/index.js';
  export default {
    components: { weexLamp },
    data: () => ({
        aniTime: 400,
        stopTime: 1200,
        lampType: 'vertical',
        containerStyle: {
            width: '750px',
            height: '64px',
        },
        itemStyle: {
            color: '#C48C38',
            height: '64px',
            overflow: 'hidden',
            'font-size': '20px',
            'line-height': '64px',
            'border-width': '1px',
            'border-style': 'solid',
            'border-color': 'red',
        },
        lampData: [
            '这是一条测试数据，0',
            '这是一条测试数据，这1',
            '这是一条测试数据，这是2',
            '这是一条测试数据，这是一3',
            '这是一条测试数据，这是一条4',
            '这是一条测试数据，这是一条测5',
            '这是一条测试数据，这是一条测试6',
            '这是一条测试数据，这是一条测试数7',
            '这是一条测试数据，这是一条测试数据8',
            '这是一条测试数据，这是一条测试数9',
            '这是一条测试数据，这是一条测试10',
            '这是一条测试数据，这是一条测11',
            '这是一条测试数据，这是一条12',
            '这是一条测试数据，这是一13',
            '这是一条测试数据，这是14',
            '这是一条测试数据，这15',
            '这是一条测试数据，16',
        ],
        containerStyle1: {
            width: '650px',
            margin: '50px',
            height: '400px',
            'border-radius': '20px',
            'background-color': '#fff',
        },
        itemStyle1: {
            color: '#C48C38',
            height: '60px',
            padding: '0 24px',
            'font-size': '20px',
            'line-height': '60px',
        },
    }),
    methods: {
    },
    mounted() {
        this.$refs.lamp1.start();
        this.$refs.lamp2.start();
        // this.$refs.lamp3.start();
    }
  };
</script>

<style lang="less" scoped>
.weex-demo{
  flex: 1;
  background-color: #ccc;
}
.test{
    &-item{
        align-items: center;
        flex-direction: row;
    }
    &-img{
        margin-right: 5px;
        width: 40px;
        height: 40px;
    }
    &-wrapper{
        height: 64px;
        padding: 0 24px;
        background-color: #fff;
        flex-direction: row;
        justify-content: flex-start;
    }
    &-label{
        margin-top: 20px;
      margin-right: 10px;
      width: 24px;
      height: 24px;
    }
}
.text{
    font-size: 24px;
    margin-top: 15px;
}
</style>