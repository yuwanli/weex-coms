<template>
  <div class="weex-demo">
      <text>111111</text>
      <weex-rich-text :data="info"></weex-rich-text>
  </div>
</template>
<script>
  import weexRichText from '../../components/weex-rich-text/index.js';
  export default {
    components: { weexRichText },
    data: () => ({
        info: {
            text: '3、如果返现金额未能及时到账，请使用相关截图（如银行收款截图），联系在线客服反馈。',
            defaultStyle: {
                fontSize: '28px',
                color: '#3D3D3D',
                lineHeight: '40px',
            },
            info: [
                {
                    text: '联系在线客服',
                    style: {
                        color: '#4FACFC',
                    },
                    href: '',
                },
            ],
        },
    }),
    methods: {
    }
  };
</script>

<style lang="less" scoped>
.weex-demo{
  flex: 1;
  background-color: #ccc;
}
</style>