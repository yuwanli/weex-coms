<template>
    <div>
        <weex-popup :show-popup="showPopup" :show-close="false" :default-close="false" @hidePopup="showPopup = false">
            <text slot="content">111111</text>
        </weex-popup>
    </div>
</template>
<script>
  import weexPopup from '../../components/weex-popup/index.js';
  export default {
    components: { weexPopup },
    data: () => ({
        showPopup: true,
    }),
    methods: {
    }
  };
</script>
<style>
</style>
