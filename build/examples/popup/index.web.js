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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(3)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__index_vue___default.a; });


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.weex-popup[data-v-3959d726] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n}\n.weex-popup_bottom[data-v-3959d726] {\n  justify-content: flex-end;\n}\n.weex-popup_top[data-v-3959d726] {\n  justify-content: flex-start;\n}\n.weex-popup_center[data-v-3959d726] {\n  justify-content: center;\n}\n.weex-popup_mask[data-v-3959d726] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  opacity: 0;\n}\n.weex-popup_content[data-v-3959d726] {\n  align-items: center;\n  flex-direction: column;\n  opacity: 0;\n}\n.weex-popup_img[data-v-3959d726] {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 24px;\n  top: 24px;\n}\n", "", {"version":3,"sources":["/Users/yuwanli/Desktop/myself/weex-coms/components/weex-popup/index.vue"],"names":[],"mappings":";AAAA;EACE,gBAAgB;EAChB,OAAO;EACP,SAAS;EACT,UAAU;EACV,QAAQ;EACR,oBAAoB;EACpB,wBAAwB;CACzB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,4BAA4B;CAC7B;AACD;EACE,wBAAwB;CACzB;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,SAAS;EACT,UAAU;EACV,QAAQ;EACR,qCAAqC;EACrC,WAAW;CACZ;AACD;EACE,oBAAoB;EACpB,uBAAuB;EACvB,WAAW;CACZ;AACD;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,UAAU;CACX","file":"index.vue","sourcesContent":[".weex-popup {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n}\n.weex-popup_bottom {\n  justify-content: flex-end;\n}\n.weex-popup_top {\n  justify-content: flex-start;\n}\n.weex-popup_center {\n  justify-content: center;\n}\n.weex-popup_mask {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  opacity: 0;\n}\n.weex-popup_content {\n  align-items: center;\n  flex-direction: column;\n  opacity: 0;\n}\n.weex-popup_img {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 24px;\n  top: 24px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(9)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(8),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3959d726",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yuwanli/Desktop/myself/weex-coms/components/weex-popup/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3959d726", Component.options)
  } else {
    hotAPI.reload("data-v-3959d726", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.showPopup || _vm.showInCurrent) ? _c('div', {
    ref: "popup",
    staticClass: " weex-ct weex-div",
    class: ['weex-popup', 'weex-popup_' + _vm.popupType],
    attrs: {
      "weex-type": "div"
    }
  }, [_c('div', {
    ref: "popupMask",
    staticClass: "weex-popup_mask weex-ct weex-div",
    attrs: {
      "weex-type": "div",
      "data-evt-click": ""
    },
    on: {
      "click": _vm.$stopOuterA,
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.maskClick($event)
      }
    }
  }), _vm._v(" "), _c('div', {
    ref: "popupContent",
    staticClass: " weex-ct weex-div",
    class: ['weex-popup_content', 'weex-popup_content_' + _vm.popupType],
    style: (_vm._px2rem(_vm.computedStyle, 75)),
    attrs: {
      "weex-type": "div",
      "data-evt-click": ""
    },
    on: {
      "click": _vm.$stopOuterA,
      "weex$tap": function($event) {
        $event.stopPropagation();
      }
    }
  }, [_vm._t("default", null, {}), _vm._v(" "), (_vm.showClose) ? _c('figure', {
    staticClass: "weex-popup_img weex-el weex-image",
    attrs: {
      "src": "http://h0.hucdn.com/open201911/60ed60ab61e40217_40x40.png",
      "data-img-src": "http://h0.hucdn.com/open201911/60ed60ab61e40217_40x40.png",
      "weex-type": "image",
      "data-evt-click": ""
    },
    on: {
      "click": _vm.$stopOuterA,
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.hidePopup($event)
      }
    }
  }) : _vm._e()], 2)]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3959d726", module.exports)
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("38e2ac6a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3959d726\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3959d726\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(26)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(23),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-34796508",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yuwanli/Desktop/myself/weex-coms/examples/popup/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-34796508", Component.options)
  } else {
    hotAPI.reload("data-v-34796508", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.weex-demo[data-v-34796508] {\n  flex: 1;\n}\n.content[data-v-34796508] {\n  width: 540px;\n  border-radius: 5px;\n  padding: 24px 32px;\n  background-color: #fff;\n}\n", "", {"version":3,"sources":["/Users/yuwanli/Desktop/myself/weex-coms/examples/popup/index.vue"],"names":[],"mappings":";AAAA;EACE,QAAQ;CACT;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;CACxB","file":"index.vue","sourcesContent":[".weex-demo {\n  flex: 1;\n}\n.content {\n  width: 540px;\n  border-radius: 5px;\n  padding: 24px 32px;\n  background-color: #fff;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_vue__);

__WEBPACK_IMPORTED_MODULE_0__index_vue___default.a.el = '#root';
/* harmony default export */ __webpack_exports__["default"] = (new Vue(__WEBPACK_IMPORTED_MODULE_0__index_vue___default.a));

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_weex_popup_index_js__ = __webpack_require__(4);
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
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weex-demo weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('div', {
    staticClass: "description weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('p', {
    staticClass: " weex-el weex-text",
    attrs: {
      "weex-type": "text"
    }
  }, [_vm._v("weex-popup")]), _vm._v(" "), _c('p', {
    staticClass: " weex-el weex-text",
    attrs: {
      "weex-type": "text"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "btn weex-ct weex-div",
    attrs: {
      "weex-type": "div",
      "data-evt-click": ""
    },
    on: {
      "click": _vm.$stopOuterA,
      "weex$tap": function($event) {
        $event.stopPropagation();
        _vm.showPopup = true
      }
    }
  }, [_vm._v("show")]), _vm._v(" "), _c('weex-popup', {
    attrs: {
      "show-popup": _vm.showPopup,
      "show-close": true,
      "default-close": false,
      "data-evt-hidePopup": ""
    },
    on: {
      "hidePopup": function($event) {
        _vm.showPopup = false
      }
    }
  }, [_c('div', {
    staticClass: "content weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('p', {
    staticClass: " weex-el weex-text",
    attrs: {
      "weex-type": "text"
    }
  }, [_vm._v("11111")])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-34796508", module.exports)
  }
}

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7909ed21", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-34796508\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-34796508\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.web.js.map