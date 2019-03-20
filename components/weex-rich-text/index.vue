<template>
    <div class="weexRichText">
        <slot name="before"></slot>
        <text
            v-for="item in textArray"
            v-bind:key="item.id"
            :style="item.style"
            @click="textClick(item)"
        >{{item.text}}</text>
        <slot name="after"></slot>
    </div>
</template>

<script>
var navigator = weex.requireModule('navigator');
import extend from '../../utils/extend.js'
export default {
    data() {
        return {};
    },
    props: {
        data: {
            default: {},
            type: Object,
        },
        defaultHandle: {
            default: (url) => {
                navigator.push({
                    url,
                    animated: "true"
                });
            },
            type: Function
        },
    },
    computed: {
        textArray() {
            let res = this.data.text ? this.data.text.split('') : [];
            res = res.map((val) => ({
                text: val,
                style: extend({},this.data.defaultStyle),
            }));
            this.data.info && this.data.info.forEach((val) => {
                if (val.text) {
                    val.start = this.data.text.indexOf(val.text);
                    val.length = val.text.length;
                }
                for (let i = val.start; i < val.length + val.start; i++) {
                    res[i].style = extend(true,res[i].style,val.style)
                    res[i].href = val.href;
                    res[i].clickHandle = val.clickHandle;
                }
            });
            return res;
        },
    },
    methods: {
        textClick(item) {
            if (item.clickHandle && typeof item.clickHandle === 'function') {
                item.clickHandle();
            } else if (item.href) {
                this.defaultHandle(item.href)
            }
        },
    },
};
</script>

<style lang="less" scoped>
.weexRichText{
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
} 
</style>
