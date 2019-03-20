<template>
    <div :class="['lamp','lamp_'+lampType]" ref="container" :style="containerStyle">
        <slot name="before"></slot>
        <template v-if="lampType === 'single'">
            <div ref="wrapper" class="lamp-wrapper" :style="{height: lampData.length * itemHeight+'px'}">
                <template v-for="item in lampData" >
                    <slot :data="item" name="item">
                        <text class="lamp-item" v-bind:key="item" :style="itemStyle">{{item}}</text>
                    </slot>
                </template>
            </div>
        </template>
        <template v-else-if="lampType === 'vertical'">
            <slot ref="wrapper" name="item" :data="lampData">
                <div ref="wrapper" class="lamp-wrapper">
                    <text class="lamp-item" :style="itemStyle" v-for="item in lampData" v-bind:key="item.id">{{lampType}}{{item}}</text>
                    <text class="lamp-item" :style="itemStyle" v-for="item in (canVerticalRun && lampData)" v-bind:key="item.id">{{lampType}}{{item}}</text>
                </div>
            </slot>
        </template>
        <slot name="after"></slot>
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
        test: {
            default: Boolean,
            type: false,
        },
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
        // console.log(this.lampData);
        // if (this.lampType === 'single') {
        //     this.lampData.push(this.lampData[0]);
        //     this.start();
        // }
    },
    methods: {
        verticalRun() {
            let len = this.lampData.length;
            dom.getComponentRect(this.$refs.container, (option) => {
                if (this.itemHeight * len < option.size.height) {
                    this.canVerticalRun = false;
                    return;
                }
                this.canVerticalRun = true;
                let total = this.aniTime * len;
                this.lampData = this.lampData.concat(this.lampData);
                let t = `(t%${total})`;
                let speed = this.itemHeight / this.aniTime;
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
            let num = this.lampData.length - 1;
            let total = this.aniTime + this.stopTime;
            let circle = num * total;
            let t = `(t%${circle})`;
            let floor = `floor(${t}/${total})`;
            let ceil = `ceil(${t}/${total})`;
            // 匀速
            // let expression = `(${t}%${total})<${this.aniTime}?(-1*${this.itemHeight / this.aniTime}*(${t}-(floor(${t}/${total})*${this.stopTime}))):(ceil(${t}/${total})*-1*${this.itemHeight})`;
            
            let expression = '';
            // sin
            if (this.test){
                expression = `(${t}%${total})<${this.aniTime}?
                -1*(${floor}*${this.itemHeight}):
                (-1*${ceil}*${this.itemHeight})`;
            } else {
                expression = `(${t}%${total})<${this.aniTime}?
                -1*(sin((${t}-(${floor}*${total}))*${Math.PI}/(2*${this.aniTime}))*${this.itemHeight}+${floor}*${this.itemHeight}):
                (-1*${ceil}*${this.itemHeight})`;
            }
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
        },
        start() {
            if (this.lampData.length <= 1) {
                return;
            }
            if (this.lampType === 'single') {
                this.lampData.push(this.lampData[0]);
            }
            const fn = this[`${this.lampType}Run`];
            if (fn && typeof fn === 'function') {
                fn();
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
    align-items: flex-start;
    flex-direction: row;
    &-vertical{
        align-items: flex-start;
    }
    &-wrapper{
        flex: 1;
    }
    &-item{
        align-items: center;
        justify-content: center;
    }
}
</style>
