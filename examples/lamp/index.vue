<template>
  <div class="weex-demo">
    <text class="text">是我们这边在封装的跑马灯组件的时候遇到一些问题</text>
    <text class="text">去除过渡动画，当枚举数量越多时，在安卓上的误差会越来越大，在ios上表现良好</text>
    <text class="text">猜测是因为‘px->原生尺寸‘这个转换的过程中有误差产生，然后数据量大的时候，导致误差会越来越大</text>
    <text class="text">希望官方能查下这个问题，且能解决下</text>
    <text class="text">以下是去除过渡效果的时候，为展示效果都加上了边框</text>
    <weex-lamp class="test" :container-style="containerStyle" :lamp-data="lampData" :item-style="itemStyle" :ani-time="aniTime" :stop-time="stopTime" :item-height="itemHeight" :test=true ref="lamp1">
        <image
        slot="before"
        class="lamp-label"
        src="http://h0.hucdn.com/open/201904/3db5bf7affe4900c_36x36.png"></image>
        <div slot="item" class="test-item" slot-scope="{data}">
            <image src="http://h0.hucdn.com/open/201904/3e066c4d8435290b_88x88.png" class="test-img"></image>
            <text :style="itemStyle">{{data}}</text>
        </div>
    </weex-lamp>

    <text class="text">最终希望达到的效果</text>
    <weex-lamp class="test" :container-style="containerStyle" :lamp-data="lampData" :item-style="itemStyle" :ani-time="aniTime" :stop-time="stopTime" :item-height="itemHeight" ref="lamp2">
        <image
        slot="before"
        class="lamp-label"
        src="http://h0.hucdn.com/open/201904/3db5bf7affe4900c_36x36.png"></image>
        <div slot="item" class="test-item" slot-scope="{data}">
            <image src="http://h0.hucdn.com/open/201904/3e066c4d8435290b_88x88.png" class="test-img"></image>
            <text :style="itemStyle">{{data}}</text>
        </div>
    </weex-lamp>

    <text class="text">以下是另一种形式跑马灯</text>
    <weex-lamp :container-style="containerStyle1" :lamp-data="lampData" :item-style="itemStyle1" :ani-time="aniTime" :item-height="itemHeight"
    :lamp-type="lampType"
    ref="lamp3">
    </weex-lamp>

  </div>
</template>
<script>
  import weexLamp from '../../components/weex-lamp/index.js';
  export default {
    components: { weexLamp },
    data: () => ({
        itemHeight: 60,
        aniTime: 400,
        stopTime: 1200,
        containerStyle: {
            width: '750px',
            height: '60px',
            'padding-left': '25px',
            'padding-right': '25px',
            'background-color': '#fff',
            overflow: 'hidden',
        },
        itemStyle: {
            color: '#C48C38',
            height: '60px',
            overflow: 'hidden',
            'font-size': '20px',
            'line-height': '60px',
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
            'border-width': '20px',
            'border-style': 'solid',
            'border-color': '#fff',
            'border-radius': '20px',
            'background-color': '#fff',
        },
        itemStyle1: {
            color: '#C48C38',
            height: '60px',
            'font-size': '20px',
            'line-height': '60px',
        },
    }),
    methods: {
    },
    mounted() {
        this.$refs.lamp1.start();
        this.$refs.lamp2.start();
        this.$refs.lamp3.start();
    }
  };
</script>

<style lang="less" scoped>
.weex-demo{
  flex: 1;
  background-color: #ccc;
}
.test{
    margin-top: 20px;
    &-item{
        align-items: center;
        flex-direction: row;
    }
    &-img{
        margin-right: 5px;
        width: 40px;
        height: 40px;
    }
}
.text{
    font-size: 24px;
    padding: 0 24px;
    margin-top: 15px;
}
</style>