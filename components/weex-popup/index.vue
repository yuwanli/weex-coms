<template>
    <div :class="['weex-popup','weex-popup_'+popupType]" ref="popup" v-if="showPopup || showInCurrent">
        <div class="weex-popup_mask" ref="popupMask" @click="maskClick"></div>
        <div :class="['weex-popup_content','weex-popup_content_'+popupType]" :style="computedStyle" ref="popupContent" @click.stop>
            <slot></slot>
            <image v-if="showClose" class="weex-popup_img" @click="hidePopup" src="http://h0.hucdn.com/open201911/60ed60ab61e40217_40x40.png"></image>
        </div>
    </div>
</template>

<script>
const dom = weex.requireModule('dom');
const animation = weex.requireModule('animation');

export default {
    data() {
        return {
            showInCurrent: false,
            popupMask: '',
            popupContent: '',
            initFlag: false,
            contentHeight: 750,
        };
    },
    props: {
        showPopup: {
            type: Boolean,
            default: false,
        },
        showClose: {
            type: Boolean,
            default: false,
        },
        popupType: {
            type: String,
            default: 'center',
        },
        defaultClose: {
            type: Boolean,
            default: true,
        },
    },
    components: {},
    computed: {
        computedStyle() {
            if (this.popupType === 'bottom') {
                return {
                    transform: `translate(0px, ${this.contentHeight}px)`,
                };
            }
            if (this.popupType === 'top') {
                return {
                    transform: `translate(0px, ${-1 * this.contentHeight}px)`,
                };
            }
            return {};
        },
    },
    watch: {
        showPopup: {
            immediate: true,
            handler: function (val) {
                setTimeout(() => {
                    this.commonHandle(val);
                }, 30);
            },
        },
    },
    mounted() {
    },
    methods: {
        maskClick() {
            this.defaultClose && this.hidePopup();
        },
        hidePopup() {
            this.$emit('hidePopup');
        },
        commonHandle(flag) {
            let resObj = {
                popupMask: this.$refs.popupMask,
                popupContent: this.$refs.popupContent,
                maskStyle: {
                    opacity: +flag,
                },
                contentStyle: {
                    opacity: +flag,
                },
            };
            if (this.popupType === 'bottom') {
                if (flag) {
                    resObj.contentStyle.transform = 'translate(0px, 0px)';
                } else {
                    resObj.contentStyle.transform = `translate(0px, ${this.contentHeight}px)`;
                }
            }
            if (this.popupType === 'top') {
                if (flag) {
                    resObj.contentStyle.transform = 'translate(0px, 0px)';
                } else {
                    resObj.contentStyle.transform = `translate(0px, ${-1 * this.contentHeight}px)`;
                }
            }
            const getHeight = () => new Promise((resolve) => {
                if (flag && !this.initFlag && this.popupType !== 'center') {
                    this.initFlag = true;
                    dom.getComponentRect(this.$refs.popupContent, (option) => {
                        if (option.result) {
                            this.contentHeight = option.size.height;
                            setTimeout(() => {
                                resolve();
                            }, 30);
                        }
                    });
                } else {
                    resolve();
                }
            });
            const handle = () => {
                animation.transition(resObj.popupMask, {
                    styles: resObj.maskStyle,
                    duration: 500,
                    timingFunction: 'ease',
                }, () => {
                    this.showInCurrent = flag;
                });
                getHeight().then(() => {
                    animation.transition(resObj.popupContent, {
                        styles: resObj.contentStyle,
                        duration: 300,
                        timingFunction: 'ease',
                    });
                });
            };
            handle();
        },
    },
};
</script>

<style lang="less" scoped>
.weex-popup{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    &_bottom{
        justify-content: flex-end;
    }
    &_top{
        justify-content: flex-start;
    }
    &_center{
        justify-content: center;
    }
    &_mask{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0,0,0,0.6);
        opacity: 0;
    }
    &_content{
        align-items: center;
        flex-direction: column;
        opacity: 0;
    }
    &_img{
        width: 40px;
        height: 40px;
        position: absolute;
        right: 24px;
        top: 24px;
    }
}

</style>
