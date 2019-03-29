## weex-coms
> weex组件库，这里主要是分享下weex开发过程中封装的一些weex组件，如popup、rich-text、lamp（努力持续更新）,会分享自己遇到的一些坑，以及自己的一个做法和想法。

### 项目启动
- 下载当前工程
```
git clone https://github.com/yuwanli/weex-coms.git
```
- 安装依赖
```
npm install --registry=https://registry.npm.taobao.org
```
- `weex -v`确认已经安装weex-previewer，若没有安装则
```
npm install weex-previewer --save
```
- 安装软件

因为跑马灯lamp是使用了bindingx的，所以建议下载[bindingx](https://alibaba.github.io/bindingx/)的app,拉到页面底部有二维码，扫码下载
- 启动页面（以popup为例）
```
weex-previewer examples/popup/index.vue
```
- 扫码查看相应页面

### 组件相关信息

组件 | 描述 | 参数
---|--- |---
weex-popup | 弹窗组件支持居中的淡入淡出、向上向下弹出的形式 |showPopup(`boolean`)：是否显示弹窗，默认`false`<br>popupType(`string`)：弹窗类型(`center`、`top`、`bottom`)，默认`center`<br>defaultClose(`boolean`)：是否点击蒙层关闭弹窗，默认`true`<br>popupColor(`string`)：蒙层颜色，默认`rgba(0,0,0,0.6)`
weex-lamp | 跑马灯组件，支持单条和容器式跑马灯 |
weex-rich-text | 富文本组件，弥补weex不支持`v-html`/`v-text`的短板 |

##### 可能有人会说，不是有weex-ui了么，我这个是不是在重复造轮子？
weex-ui确实封装了很多实用的组件，很多组件我们也在实际的项目中在使用，所以当然我不会重复造轮子。封装的这些组件时为了解决其他的一些问题，或者说是做了一些优化，实现的功能上也会有些许差异，具体的细节可以查看

- [weex-popup](https://github.com/yuwanli/weex-coms/blob/master/components/weex-popup/README.md)
- [weex-lamp](https://github.com/yuwanli/weex-coms/blob/master/components/weex-lamp/README.md)
- [weex-rich-text](https://github.com/yuwanli/weex-coms/blob/master/components/weex-rich-text/README.md)
 
##### 看组件相关内容时，我希望你已经（点击了解更多）

- 对weex有所了解，最好已经做过[weex](https://weex.apache.org/zh)相关的开发
- 知道如何用[weex-previewer](https://github.com/weexteam/weex-previewer)启动页面
- 对weex比较感兴趣，有[vue](https://cn.vuejs.org/index.html)开发经验
- 了解[bindingx](https://alibaba.github.io/bindingx/)
- 了解[weex-ui](https://alibaba.github.io/weex-ui/#/cn/)