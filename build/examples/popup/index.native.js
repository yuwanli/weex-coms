// { "framework": "Vue" }

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__index_vue___default.a; });


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(4)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/yuwanli/Desktop/myself/weex-coms/components/weex-popup/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b26700ee"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

const dom = weex.requireModule('dom');
const animation = weex.requireModule('animation');

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            showInCurrent: false,
            popupMask: '',
            popupContent: '',
            initFlag: false,
            contentHeight: 750
        };
    },
    props: {
        showPopup: {
            type: Boolean,
            default: false
        },
        showClose: {
            type: Boolean,
            default: false
        },
        popupType: {
            type: String,
            default: 'center'
        },
        defaultClose: {
            type: Boolean,
            default: true
        }
    },
    components: {},
    computed: {
        computedStyle() {
            if (this.popupType === 'bottom') {
                return {
                    transform: `translate(0px, ${this.contentHeight}px)`
                };
            }
            if (this.popupType === 'top') {
                return {
                    transform: `translate(0px, ${-1 * this.contentHeight}px)`
                };
            }
            return {};
        }
    },
    watch: {
        showPopup: {
            immediate: true,
            handler: function (val) {
                setTimeout(() => {
                    this.commonHandle(val);
                }, 30);
            }
        }
    },
    mounted() {},
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
                    opacity: +flag
                },
                contentStyle: {
                    opacity: +flag
                }
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
            const getHeight = () => new Promise(resolve => {
                if (flag && !this.initFlag && this.popupType !== 'center') {
                    this.initFlag = true;
                    dom.getComponentRect(this.$refs.popupContent, option => {
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
                    timingFunction: 'ease'
                }, () => {
                    this.showInCurrent = flag;
                });
                getHeight().then(() => {
                    animation.transition(resObj.popupContent, {
                        styles: resObj.contentStyle,
                        duration: 300,
                        timingFunction: 'ease'
                    });
                });
            };
            handle();
        }
    }
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  "weex-popup": {
    "position": "fixed",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "weex-popup_bottom": {
    "justifyContent": "flex-end"
  },
  "weex-popup_top": {
    "justifyContent": "flex-start"
  },
  "weex-popup_center": {
    "justifyContent": "center"
  },
  "weex-popup_mask": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0,
    "backgroundColor": "rgba(0,0,0,0.6)",
    "opacity": 0
  },
  "weex-popup_content": {
    "alignItems": "center",
    "flexDirection": "column",
    "opacity": 0
  },
  "weex-popup_img": {
    "width": "40",
    "height": "40",
    "position": "absolute",
    "right": "24",
    "top": "24"
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.showPopup || _vm.showInCurrent) ? _c('div', {
    ref: "popup",
    class: ['weex-popup', 'weex-popup_' + _vm.popupType]
  }, [_c('div', {
    ref: "popupMask",
    staticClass: ["weex-popup_mask"],
    on: {
      "click": _vm.maskClick
    }
  }), _c('div', {
    ref: "popupContent",
    class: ['weex-popup_content', 'weex-popup_content_' + _vm.popupType],
    style: _vm.computedStyle,
    on: {
      "click": function($event) {}
    }
  }, [_vm._t("default"), (_vm.showClose) ? _c('image', {
    staticClass: ["weex-popup_img"],
    attrs: {
      "src": "http://h0.hucdn.com/open201911/60ed60ab61e40217_40x40.png"
    },
    on: {
      "click": _vm.hidePopup
    }
  }) : _vm._e()], 2)]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(17)
)

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(20)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/yuwanli/Desktop/myself/weex-coms/examples/popup/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5463fd28"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_vue__);

__WEBPACK_IMPORTED_MODULE_0__index_vue___default.a.el = '#root';
/* harmony default export */ __webpack_exports__["default"] = (new Vue(__WEBPACK_IMPORTED_MODULE_0__index_vue___default.a));

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_weex_popup_index_js__ = __webpack_require__(0);
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: { weexPopup: __WEBPACK_IMPORTED_MODULE_0__components_weex_popup_index_js__["a" /* default */] },
  data: () => ({
    showPopup: false
  }),
  methods: {}
});

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

module.exports = {
  "weex-demo": {
    "flex": 1
  },
  "content": {
    "width": "540",
    "borderRadius": "5",
    "paddingTop": "24",
    "paddingRight": "32",
    "paddingBottom": "24",
    "paddingLeft": "32",
    "backgroundColor": "#ffffff"
  }
}

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["weex-demo"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.showPopup = true
      }
    }
  }, [_vm._v("show")]), _c('weex-popup', {
    attrs: {
      "showPopup": _vm.showPopup,
      "showClose": true,
      "defaultClose": false
    },
    on: {
      "hidePopup": function($event) {
        _vm.showPopup = false
      }
    }
  }, [_c('div', {
    staticClass: ["content"]
  }, [_c('text', [_vm._v("11111")])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["description"]
  }, [_c('text', [_vm._v("weex-popup")]), _c('text')])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.native.js.map