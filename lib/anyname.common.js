module.exports = /******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    })
    /******/
    /******/ // Execute the module function
    /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    )
    /******/
    /******/ // Flag the module as loaded
    /******/ module.l = true
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = modules
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = installedModules
  /******/
  /******/ // define getter function for harmony exports
  /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      })
      /******/
    }
    /******/
  }
  /******/
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      })
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true })
    /******/
  }
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/ __webpack_require__.t = function (value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value)
    /******/ if (mode & 8) return value
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value
    /******/ var ns = Object.create(null)
    /******/ __webpack_require__.r(ns)
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value,
    })
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key]
          }.bind(null, key)
        )
    /******/ return ns
    /******/
  }
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default']
          }
        : /******/ function getModuleExports() {
            return module
          }
    /******/ __webpack_require__.d(getter, 'a', getter)
    /******/ return getter
    /******/
  }
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  }
  /******/
  /******/ // __webpack_public_path__
  /******/ __webpack_require__.p = ''
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/ return __webpack_require__((__webpack_require__.s = 'fb15'))
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ '230e': /***/ function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__('d3f4')
      var document = __webpack_require__('7726').document
      // typeof document.createElement is 'object' in old IE
      var is = isObject(document) && isObject(document.createElement)
      module.exports = function (it) {
        return is ? document.createElement(it) : {}
      }

      /***/
    },

    /***/ 5398: /***/ function (module, exports, __webpack_require__) {
      // extracted by mini-css-extract-plugin
      /***/
    },

    /***/ '6a99': /***/ function (module, exports, __webpack_require__) {
      // 7.1.1 ToPrimitive(input [, PreferredType])
      var isObject = __webpack_require__('d3f4')
      // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string
      module.exports = function (it, S) {
        if (!isObject(it)) return it
        var fn, val
        if (
          S &&
          typeof (fn = it.toString) == 'function' &&
          !isObject((val = fn.call(it)))
        )
          return val
        if (
          typeof (fn = it.valueOf) == 'function' &&
          !isObject((val = fn.call(it)))
        )
          return val
        if (
          !S &&
          typeof (fn = it.toString) == 'function' &&
          !isObject((val = fn.call(it)))
        )
          return val
        throw TypeError("Can't convert object to primitive value")
      }

      /***/
    },

    /***/ 7726: /***/ function (module, exports) {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = (module.exports =
        typeof window != 'undefined' && window.Math == Math
          ? window
          : typeof self != 'undefined' && self.Math == Math
          ? self
          : // eslint-disable-next-line no-new-func
            Function('return this')())
      if (typeof __g == 'number') __g = global // eslint-disable-line no-undef

      /***/
    },

    /***/ '79e5': /***/ function (module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec()
        } catch (e) {
          return true
        }
      }

      /***/
    },

    /***/ '7f7f': /***/ function (module, exports, __webpack_require__) {
      var dP = __webpack_require__('86cc').f
      var FProto = Function.prototype
      var nameRE = /^\s*function ([^ (]*)/
      var NAME = 'name'

      // 19.2.4.2 name
      NAME in FProto ||
        (__webpack_require__('9e1e') &&
          dP(FProto, NAME, {
            configurable: true,
            get: function () {
              try {
                return ('' + this).match(nameRE)[1]
              } catch (e) {
                return ''
              }
            },
          }))

      /***/
    },

    /***/ '86cc': /***/ function (module, exports, __webpack_require__) {
      var anObject = __webpack_require__('cb7c')
      var IE8_DOM_DEFINE = __webpack_require__('c69a')
      var toPrimitive = __webpack_require__('6a99')
      var dP = Object.defineProperty

      exports.f = __webpack_require__('9e1e')
        ? Object.defineProperty
        : function defineProperty(O, P, Attributes) {
            anObject(O)
            P = toPrimitive(P, true)
            anObject(Attributes)
            if (IE8_DOM_DEFINE)
              try {
                return dP(O, P, Attributes)
              } catch (e) {
                /* empty */
              }
            if ('get' in Attributes || 'set' in Attributes)
              throw TypeError('Accessors not supported!')
            if ('value' in Attributes) O[P] = Attributes.value
            return O
          }

      /***/
    },

    /***/ '8c59': /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UISecond_vue_vue_type_style_index_0_id_050cf718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__('5398')
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UISecond_vue_vue_type_style_index_0_id_050cf718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UISecond_vue_vue_type_style_index_0_id_050cf718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__
        )
      /* unused harmony reexport * */

      /***/
    },

    /***/ '9e1e': /***/ function (module, exports, __webpack_require__) {
      // Thank's IE8 for his funny defineProperty
      module.exports = !__webpack_require__('79e5')(function () {
        return (
          Object.defineProperty({}, 'a', {
            get: function () {
              return 7
            },
          }).a != 7
        )
      })

      /***/
    },

    /***/ b920: /***/ function (module, exports, __webpack_require__) {
      // extracted by mini-css-extract-plugin
      /***/
    },

    /***/ c69a: /***/ function (module, exports, __webpack_require__) {
      module.exports =
        !__webpack_require__('9e1e') &&
        !__webpack_require__('79e5')(function () {
          return (
            Object.defineProperty(__webpack_require__('230e')('div'), 'a', {
              get: function () {
                return 7
              },
            }).a != 7
          )
        })

      /***/
    },

    /***/ cb7c: /***/ function (module, exports, __webpack_require__) {
      var isObject = __webpack_require__('d3f4')
      module.exports = function (it) {
        if (!isObject(it)) throw TypeError(it + ' is not an object!')
        return it
      }

      /***/
    },

    /***/ d3f4: /***/ function (module, exports) {
      module.exports = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function'
      }

      /***/
    },

    /***/ f113: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UIFirst_vue_vue_type_style_index_0_id_7cf56c2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__('b920')
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UIFirst_vue_vue_type_style_index_0_id_7cf56c2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UIFirst_vue_vue_type_style_index_0_id_7cf56c2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__
        )
      /* unused harmony reexport * */

      /***/
    },

    /***/ f6fd: /***/ function (module, exports) {
      // document.currentScript polyfill by Adam Miller

      // MIT license

      ;(function (document) {
        var currentScript = 'currentScript',
          scripts = document.getElementsByTagName('script') // Live NodeList collection

        // If browser needs currentScript polyfill, add get currentScript() to the document object
        if (!(currentScript in document)) {
          Object.defineProperty(document, currentScript, {
            get: function () {
              // IE 6-10 supports script readyState
              // IE 10+ support stack trace
              try {
                throw new Error()
              } catch (err) {
                // Find the second match for the "at" string to get file src url from stack.
                // Specifically works with the format of stack traces in IE.
                var i,
                  res = (/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(err.stack) || [
                    false,
                  ])[1]

                // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
                for (i in scripts) {
                  if (
                    scripts[i].src == res ||
                    scripts[i].readyState == 'interactive'
                  ) {
                    return scripts[i]
                  }
                }

                // If no match, return null
                return null
              }
            },
          })
        }
      })(document)

      /***/
    },

    /***/ fb15: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__)

      // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
      // This file is imported into lib/wc client bundles.

      if (typeof window !== 'undefined') {
        if (true) {
          __webpack_require__('f6fd')
        }

        var i
        if (
          (i = window.document.currentScript) &&
          (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))
        ) {
          __webpack_require__.p = i[1] // eslint-disable-line
        }
      }

      // Indicate to webpack that this file can be concatenated
      /* harmony default export */ var setPublicPath = null

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
      var es6_function_name = __webpack_require__('7f7f')

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6b6f990a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ui-first/UIFirst.vue?vue&type=template&id=7cf56c2c&scoped=true&
      var render = function () {
        var _vm = this
        var _h = _vm.$createElement
        var _c = _vm._self._c || _h
        return _c('div', { staticClass: 'a' }, [
          _c(
            'h5',
            {
              staticClass: 'b',
              style: {
                color: _vm.sdata.color,
                fontSize: _vm.sdata.fontSize + 'px',
              },
              attrs: { data: _vm.sdata },
            },
            [_vm._v('\n    ' + _vm._s(_vm.sdata.desc) + '\n  ')]
          ),
        ])
      }
      var staticRenderFns = []

      // CONCATENATED MODULE: ./src/components/ui-first/UIFirst.vue?vue&type=template&id=7cf56c2c&scoped=true&

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ui-first/UIFirst.vue?vue&type=script&lang=js&
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
      /* harmony default export */ var UIFirstvue_type_script_lang_js_ = {
        name: 'UIFirst',
        props: {
          sdata: Object,
        },
      }
      // CONCATENATED MODULE: ./src/components/ui-first/UIFirst.vue?vue&type=script&lang=js&
      /* harmony default export */ var ui_first_UIFirstvue_type_script_lang_js_ =
        UIFirstvue_type_script_lang_js_
      // EXTERNAL MODULE: ./src/components/ui-first/UIFirst.vue?vue&type=style&index=0&id=7cf56c2c&scoped=true&lang=css&
      var UIFirstvue_type_style_index_0_id_7cf56c2c_scoped_true_lang_css_ =
        __webpack_require__('f113')

      // CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
      /* globals __VUE_SSR_CONTEXT__ */

      // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
      // This module is a runtime utility for cleaner component module output and will
      // be included in the final webpack user bundle.

      function normalizeComponent(
        scriptExports,
        render,
        staticRenderFns,
        functionalTemplate,
        injectStyles,
        scopeId,
        moduleIdentifier /* server only */,
        shadowMode /* vue-cli only */
      ) {
        // Vue.extend constructor export interop
        var options =
          typeof scriptExports === 'function'
            ? scriptExports.options
            : scriptExports

        // render functions
        if (render) {
          options.render = render
          options.staticRenderFns = staticRenderFns
          options._compiled = true
        }

        // functional template
        if (functionalTemplate) {
          options.functional = true
        }

        // scopedId
        if (scopeId) {
          options._scopeId = 'data-v-' + scopeId
        }

        var hook
        if (moduleIdentifier) {
          // server build
          hook = function (context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent &&
                this.parent.$vnode &&
                this.parent.$vnode.ssrContext) // functional
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
          hook = shadowMode
            ? function () {
                injectStyles.call(
                  this,
                  (options.functional ? this.parent : this).$root.$options
                    .shadowRoot
                )
              }
            : injectStyles
        }

        if (hook) {
          if (options.functional) {
            // for template-only hot-reload because in that case the render fn doesn't
            // go through the normalizer
            options._injectStyles = hook
            // register for functional component in vue file
            var originalRender = options.render
            options.render = function renderWithStyleInjection(h, context) {
              hook.call(context)
              return originalRender(h, context)
            }
          } else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
          }
        }

        return {
          exports: scriptExports,
          options: options,
        }
      }

      // CONCATENATED MODULE: ./src/components/ui-first/UIFirst.vue

      /* normalize component */

      var component = normalizeComponent(
        ui_first_UIFirstvue_type_script_lang_js_,
        render,
        staticRenderFns,
        false,
        null,
        '7cf56c2c',
        null
      )

      /* harmony default export */ var UIFirst = component.exports
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6b6f990a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ui-second/UISecond.vue?vue&type=template&id=050cf718&scoped=true&
      var UISecondvue_type_template_id_050cf718_scoped_true_render =
        function () {
          var _vm = this
          var _h = _vm.$createElement
          var _c = _vm._self._c || _h
          return _c('div', { staticClass: 'a' }, [
            _c(
              'h5',
              {
                staticClass: 'b',
                style: {
                  color: _vm.sdata.color,
                  fontSize: _vm.sdata.fontSize + 'px',
                },
                attrs: { data: _vm.sdata },
              },
              [_vm._v('\n    ' + _vm._s(_vm.sdata.desc) + '\n  ')]
            ),
          ])
        }
      var UISecondvue_type_template_id_050cf718_scoped_true_staticRenderFns = []

      // CONCATENATED MODULE: ./src/components/ui-second/UISecond.vue?vue&type=template&id=050cf718&scoped=true&

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ui-second/UISecond.vue?vue&type=script&lang=js&
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
      /* harmony default export */ var UISecondvue_type_script_lang_js_ = {
        name: 'UISecond',
        props: {
          sdata: Object,
        },
      }
      // CONCATENATED MODULE: ./src/components/ui-second/UISecond.vue?vue&type=script&lang=js&
      /* harmony default export */ var ui_second_UISecondvue_type_script_lang_js_ =
        UISecondvue_type_script_lang_js_
      // EXTERNAL MODULE: ./src/components/ui-second/UISecond.vue?vue&type=style&index=0&id=050cf718&scoped=true&lang=css&
      var UISecondvue_type_style_index_0_id_050cf718_scoped_true_lang_css_ =
        __webpack_require__('8c59')

      // CONCATENATED MODULE: ./src/components/ui-second/UISecond.vue

      /* normalize component */

      var UISecond_component = normalizeComponent(
        ui_second_UISecondvue_type_script_lang_js_,
        UISecondvue_type_template_id_050cf718_scoped_true_render,
        UISecondvue_type_template_id_050cf718_scoped_true_staticRenderFns,
        false,
        null,
        '050cf718',
        null
      )

      /* harmony default export */ var UISecond = UISecond_component.exports
      // CONCATENATED MODULE: ./src/components/index.js

      // 导入组件，组件必须声明 name

      // 存储组件列表UISecond

      var components = [UIFirst, UISecond] // 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册

      var install = function install(Vue) {
        // 判断是否安装
        if (install.installed) return // 遍历注册全局组件

        components.map(function (component) {
          return Vue.component(component.name, component)
        })
      } // 判断是否是直接引入文件

      if (typeof window !== 'undefined' && window.Vue) {
        install(window.Vue)
      }

      /* harmony default export */ var src_components = {
        // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
        install: install,
        // 以下是具体的组件列表
        UIFirst: UIFirst,
        UISecond: UISecond,
      }
      // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js

      /* harmony default export */ var entry_lib = (__webpack_exports__[
        'default'
      ] = src_components)

      /***/
    },

    /******/
  }
)
