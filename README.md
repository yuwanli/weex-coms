## weex-coms
> weex组件库，这里主要是分享下weex开发过程中封装的一些weex组件，如popup、rich-text、lamp（努力持续更新）,会分享自己遇到的一些坑，以及自己的一个做法和想法。

看组件相关内容时，我希望你已经（相关链接）

- 对weex有所了解，最好已经做过[weex](https://weex.apache.org/zh)相关的开发
- 知道如何用[weex-previewer](https://github.com/weexteam/weex-previewer)启动页面
- 对weex比较感兴趣，有[vue](https://cn.vuejs.org/index.html)开发经验
- 了解过[bindingx](https://alibaba.github.io/bindingx/)


组件 | 描述 | 参数
---|--- |---
weex-popup | 弹窗组件支持居中的淡入淡出、向上向下弹出的形式 |showPopup(`boolean`)：是否显示弹窗<br>popupType(`string`)：弹窗类型(`center`、`top`、`bottom`)<br>defaultClose(`boolean`)：是否默认点击蒙层关闭
weex-lamp | 跑马灯组件，支持单条和容器式跑马灯 |
weex-rich-text | 富文本组件，弥补weex不支持`v-html`/`v-text`的短板 |


