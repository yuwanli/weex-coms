<template>
    <div :class="['lamp','lamp_'+lampType]" ref="container" :style="containerStyle">
        <template v-if="lampType === 'single'">
            <div ref="wrapper" class="lamp-wrapper">
                <template v-for="item in showData" >
                    <slot :data="item" name="item">
                        <text class="lamp-item" v-bind:key="item" :style="itemStyle">{{item}}</text>
                    </slot>
                </template>
            </div>
        </template>
        <template v-else-if="lampType === 'vertical'">
            <slot ref="wrapper" name="item" :data="lampData">
                <div ref="wrapper" class="lamp-wrapper">
                    <text class="lamp-item" :style="itemStyle" v-for="item in lampData" v-bind:key="item.id">{{item}}</text>
                    <text class="lamp-item" :style="itemStyle" v-for="item in lampData" v-bind:key="item.id">{{item}}</text>
                </div>
            </slot>
        </template>
    </div>
</template>

<script>
const dom = weex.requireModule('dom');
const modal = weex.requireModule('modal');
import bindingx from 'weex-bindingx';
export default {
    data() {
        return {
            index: 0,
            canVerticalRun: false,
        };
    },
    props: {
        lampType: {
            default: 'single',
            type: String,
        },
        aniTime: {// 动画时间
            default: 500,
            type: Number,
        },
        itemHeight: {
            default: 0,
            type: Number,
        },
        stopTime: {// 静止时间
            default: 500,
            type: Number,
        },
        containerStyle: {
            default: {},
            type: Object,
        },
        lampStyle: {
            default: '',
            type: String,
        },
        itemStyle: {
            default: {},
            type: Object,
        },
        lampData: {
            default: [],
            type: Array,
        },
    },
    mounted() {
        // console.log('111122222');
        // this.start();
    },
    computed: {
        showData() {
            if (this.lampType === 'single') {
                this.lampData.push(this.lampData[0]);
            }
            return this.lampData;
        },
    },
    methods: {
        verticalRun() {
            let len = this.lampData.length;
            dom.getComponentRect(this.$refs.wrapper, (option) => {
                const height = (option.size.height / 2 / len);
                this.canVerticalRun = true;
                let total = this.aniTime * len;
                let t = `(t%${total})`;
                let speed = height / this.aniTime;
                let expression = `${t} * -1 * ${speed}`;
                bindingx.bind({
                    eventType: 'timing',
                    props: [
                        {
                            element: this.getEl(this.$refs.wrapper),
                            property: 'transform.translateY',
                            expression: expression,
                        },
                    ],

                });
            });
        },
        singleRun() {
            let num = this.showData.length - 1;
            let total = this.aniTime + this.stopTime;
            let circle = num * total;
            let t = `(t%${circle})`;
            let floor = `floor(${t}/${total})`;
            let ceil = `ceil(${t}/${total})`;
            // 匀速
            // let expression = `(${t}%${total})<${this.aniTime}?(-1*${this.itemHeight / this.aniTime}*(${t}-(floor(${t}/${total})*${this.stopTime}))):(ceil(${t}/${total})*-1*${this.itemHeight})`;
            dom.getComponentRect(this.$refs.wrapper, (option) => {
                // sin
                const height = (option.size.height / this.showData.length);
                let expression = `(${t}%${total})<${this.aniTime}?
                -1*(sin((${t}-(${floor}*${total}))*${Math.PI}/(2*${this.aniTime}))*${height}+${floor}*${height}):
                (-1*${ceil}*${height})`;
                bindingx.bind({
                    eventType: 'timing',
                    props: [
                        {
                            element: this.getEl(this.$refs.wrapper),
                            property: 'transform.translateY',
                            expression: expression,
                        },
                    ],
                });
            });
        },
        start() {
            if (this.lampData.length <= 1) {
                return;
            }
            const fn = this[`${this.lampType}Run`];
            if (fn && typeof fn === 'function') {
                setTimeout(() => {
                    fn();
                }, 300);
            }
        },
        getEl(e) {
            return e.ref;
        },
    },
};
</script>
<style lang="less" scoped>
.lamp{
    overflow: hidden;
    &-vertical{
        align-items: flex-start;
    }
    &-item{
        align-items: center;
        justify-content: center;
    }
}
</style>
