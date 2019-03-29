## weex-coms
> weex组件库，这里主要是分享下weex开发过程中封装的一些weex组件，如popup、rich-text、lamp（努力持续更新）,会分享自己遇到的一些坑，以及自己的一个做法和想法。

看组件相关内容时，我希望你已经（相关链接）

- 对weex有所了解，最好已经做过[weex](https://weex.apache.org/zh)相关的开发
- 知道如何用[weex-previewer](https://github.com/weexteam/weex-previewer)启动页面
- 对weex比较感兴趣，有[vue](https://cn.vuejs.org/index.html)开发经验
- 了解[bindingx](https://alibaba.github.io/bindingx/)
- 了解[weex-ui](https://alibaba.github.io/weex-ui/#/cn/)


组件 | 描述 | 参数
---|--- |---
weex-popup | 弹窗组件支持居中的淡入淡出、向上向下弹出的形式 |showPopup(`boolean`)：是否显示弹窗<br>popupType(`string`)：弹窗类型(`center`、`top`、`bottom`)<br>defaultClose(`boolean`)：是否默认点击蒙层关闭
weex-lamp | 跑马灯组件，支持单条和容器式跑马灯 |
weex-rich-text | 富文本组件，弥补weex不支持`v-html`/`v-text`的短板 |

###### 可能有人会说，不是有weex-ui了么，我这个是不是在重复造轮子？
weex-ui确实封装了很多实用的组件，很多组件我们也在实际的项目中在使用，所以当然不会重复造轮子。封装的这些组件时为了解决其他的一些问题，或者说是做了一些优化，实现的功能上也会有些许差异，具体的细节可以查看

- [weex-popup](components/weex-popup/README.md)
- [weex-lamp](components/weex-lamp/README.md)
- [weex-rich-text](components/weex-rich-text/README.md)




