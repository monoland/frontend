webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
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
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
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
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
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
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16);
module.exports = __webpack_require__(76);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_authent__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_Apps_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_Apps_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__views_Apps_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router__ = __webpack_require__(35);








window._ = __webpack_require__(14);

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuetify___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2__utilities_authent__["a" /* Authent */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;

Object.keys(__WEBPACK_IMPORTED_MODULE_3__components__).forEach(function (component) {
    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.component(__WEBPACK_IMPORTED_MODULE_3__components__[component].name, __WEBPACK_IMPORTED_MODULE_3__components__[component]);
});

window.apps = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    router: __WEBPACK_IMPORTED_MODULE_5__router__["a" /* default */],
    data: function data() {
        return {
            message: { show: false, text: null, type: null, time: 3500 }
        };
    },

    render: function render(h) {
        return h(__WEBPACK_IMPORTED_MODULE_4__views_Apps_vue___default.a);
    }
}).$mount('#monoland');

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dialog__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Dialog__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return __WEBPACK_IMPORTED_MODULE_0__Dialog___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Form__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return __WEBPACK_IMPORTED_MODULE_1__Form___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Header__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return __WEBPACK_IMPORTED_MODULE_2__Header___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Loader__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Loader__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return __WEBPACK_IMPORTED_MODULE_3__Loader___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Search__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Search__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return __WEBPACK_IMPORTED_MODULE_4__Search___default.a; });






/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(21)
/* template */
var __vue_template__ = __webpack_require__(22)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/scripts/components/Dialog/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e546ce96", Component.options)
  } else {
    hotAPI.reload("data-v-e546ce96", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 21 */
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
    name: 'm-dialog',

    props: {
        records: {
            type: Array,
            default: function _default() {
                return [];
            }
        },

        value: Boolean
    },

    data: function data() {
        return {
            dialog: false
        };
    },

    created: function created() {
        this.dialog = this.value;
    },


    methods: {
        cancel: function cancel() {
            this.$emit('cancel');
        },

        confirm: function confirm() {
            this.$emit('confirm');
        }
    },

    watch: {
        value: function value(newval) {
            this.dialog = newval;
        }
    }
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    { attrs: { value: _vm.dialog, "max-width": "300", persistent: "" } },
    [
      _c(
        "v-card",
        { staticClass: "v-card__dialog" },
        [
          _c("v-card-title", { staticClass: "headline" }, [
            _vm._v(
              "\n            Delete (" +
                _vm._s(_vm.records.length) +
                ") record from table?\n        "
            )
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _vm._v(
              "\n            Deleting this record will delete all records under this table relations as well. You can`t undo this action.\n        "
            )
          ]),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "green darken-1", flat: "" },
                  nativeOn: {
                    click: function($event) {
                      return _vm.cancel($event)
                    }
                  }
                },
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "green darken-1", flat: "" },
                  nativeOn: {
                    click: function($event) {
                      return _vm.confirm($event)
                    }
                  }
                },
                [_vm._v("Delete")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e546ce96", module.exports)
  }
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(24)
/* template */
var __vue_template__ = __webpack_require__(25)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/scripts/components/Form/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0de42c9e", Component.options)
  } else {
    hotAPI.reload("data-v-0de42c9e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 24 */
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
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'm-form',

    props: {
        title: {
            type: String,
            default: 'Untitled'
        },

        value: Boolean
    },

    data: function data() {
        return {
            dialog: false
        };
    },

    created: function created() {
        this.dialog = this.value;
    },


    watch: {
        value: function value(newval) {
            this.dialog = newval;
        }
    }
});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: {
        value: _vm.dialog,
        fullscreen: "",
        transition: "dialog-bottom-transition"
      }
    },
    [
      _c(
        "v-card",
        { attrs: { color: "grey lighten-5" } },
        [
          _c(
            "v-toolbar",
            {
              attrs: {
                color: "grey lighten-3",
                height: "56",
                flat: "",
                extended: ""
              }
            },
            [
              _c(
                "v-btn",
                {
                  attrs: { icon: "" },
                  nativeOn: {
                    click: function($event) {
                      _vm.$emit("close")
                    }
                  }
                },
                [_c("v-icon", [_vm._v("close")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-layout",
            { attrs: { row: "", "pb-2": "" } },
            [
              _c(
                "v-flex",
                { attrs: { md8: "", "offset-md2": "" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "card__flex--toolbar" },
                    [
                      _c(
                        "v-toolbar",
                        { attrs: { color: "white", card: "", prominent: "" } },
                        [
                          _c(
                            "v-toolbar-title",
                            { staticClass: "title grey--text" },
                            [_vm._v(_vm._s(_vm.title))]
                          ),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "cyan", flat: "" },
                              nativeOn: {
                                click: function($event) {
                                  _vm.$emit("submit")
                                }
                              }
                            },
                            [_vm._v("submit")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        { staticClass: "pa-0" },
                        [_vm._t("default")],
                        2
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0de42c9e", module.exports)
  }
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(27)
/* template */
var __vue_template__ = __webpack_require__(28)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/scripts/components/Header/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-51016bba", Component.options)
  } else {
    hotAPI.reload("data-v-51016bba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 27 */
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
    name: 'm-header',

    props: {
        icon: {
            type: String,
            default: 'home'
        },

        title: {
            type: String,
            default: 'Untitled'
        },

        subtitle: {
            type: String,
            default: 'Some describtion goes here.'
        },

        to: {
            type: Object,
            default: null
        }
    }
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-flex", { staticClass: "page__header", attrs: { md12: "" } }, [
    _c(
      "div",
      { staticClass: "page__title" },
      [
        _c(
          "v-avatar",
          { attrs: { size: "56", color: "red" } },
          [_c("v-icon", { attrs: { dark: "" } }, [_vm._v(_vm._s(_vm.icon))])],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "page__title--text" }, [
          _vm._v("\n            " + _vm._s(_vm.title) + "\n            "),
          _c("div", { staticClass: "subtitle" }, [_vm._v(_vm._s(_vm.subtitle))])
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "page__actions" }, [
      _c(
        "div",
        { staticClass: "page__actions--wrapper" },
        [_vm._t("default")],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-51016bba", module.exports)
  }
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(30)
/* template */
var __vue_template__ = __webpack_require__(31)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/scripts/components/Loader/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59db09c0", Component.options)
  } else {
    hotAPI.reload("data-v-59db09c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 30 */
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
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'm-loader',

    props: {
        value: Boolean
    },

    data: function data() {
        return {
            loading: false
        };
    },

    created: function created() {
        this.loading = this.value;
    },


    watch: {
        value: function value(newval) {
            this.loading = newval;
        }
    }
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    { attrs: { value: _vm.loading, width: "300", persistent: "" } },
    [
      _c(
        "v-card",
        [
          _c(
            "v-card-text",
            [
              _vm._v("\n            loading data..\n            "),
              _c("v-progress-linear", {
                attrs: { indeterminate: "", color: "cyan" }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-59db09c0", module.exports)
  }
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(33)
/* template */
var __vue_template__ = __webpack_require__(34)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/scripts/components/Search/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d1e0915", Component.options)
  } else {
    hotAPI.reload("data-v-2d1e0915", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 33 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'm-search',

    props: {
        value: {
            type: String,
            default: null
        }
    },

    data: function data() {
        return {
            search: null
        };
    },

    created: function created() {
        this.search = this.value;
    },


    methods: {
        bouncing: window._.debounce(function (e) {
            this.search = e.target.value;
            this.$emit('input', this.search);
        }, 500),

        focus: function focus() {
            this.$refs.input.focus();
        }
    },

    watch: {
        value: function value(newval) {
            this.search = newval;
        }
    }
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-flex",
    { staticClass: "page__find" },
    [
      _c("input", {
        ref: "input",
        staticClass: "page__find--text",
        attrs: { type: "text", placeholder: "Search Program" },
        domProps: { value: _vm.search },
        on: { input: _vm.bouncing }
      }),
      _vm._v(" "),
      _c("v-spacer"),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          attrs: { color: "cyan", icon: "", flat: "" },
          nativeOn: {
            click: function($event) {
              _vm.$emit("close")
            }
          }
        },
        [_c("v-icon", [_vm._v("close")])],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2d1e0915", module.exports)
  }
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_authent__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_Auth_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_Auth_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_Auth_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_account_main__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_Page_vue__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_Page_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__views_Page_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_backend_main__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_setting_main__ = __webpack_require__(89);












__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
    routes: [{ path: '/', redirect: { name: 'Login' } }, { path: '/account', component: __WEBPACK_IMPORTED_MODULE_3__views_Auth_vue___default.a, children: [{ path: 'login', name: 'Login', component: __WEBPACK_IMPORTED_MODULE_4__views_account_main__["a" /* Login */] }] }, { path: '/backend', component: __WEBPACK_IMPORTED_MODULE_5__views_Page_vue___default.a, meta: { auth: true }, children: [{ path: 'dashboard', name: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_6__views_backend_main__["a" /* Dashboard */] }, { path: 'setting', component: __WEBPACK_IMPORTED_MODULE_6__views_backend_main__["b" /* Setting */], children: [{ path: '/', name: 'Setting', component: __WEBPACK_IMPORTED_MODULE_7__views_setting_main__["c" /* Setting */] }, { path: 'account', name: 'Account', component: __WEBPACK_IMPORTED_MODULE_7__views_setting_main__["a" /* Account */] }, { path: 'password', name: 'Password', component: __WEBPACK_IMPORTED_MODULE_7__views_setting_main__["b" /* Password */] }] }] }]
});

router.beforeEach(function (to, from, next) {
    if (to.matched.some(function (record) {
        return record.meta.auth;
    })) {
        if (!__WEBPACK_IMPORTED_MODULE_2__utilities_authent__["b" /* Authorize */].check()) {
            next({
                name: 'Login',
                query: {
                    redirect: to.fullPath
                }
            });
        } else {
            next();
        }
    } else {
        if (to.name === 'Login' && __WEBPACK_IMPORTED_MODULE_2__utilities_authent__["b" /* Authorize */].check()) {
            next({
                name: 'Dashboard'
            });
        } else {
            next();
        }
    }
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Authent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Authorize; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__env_js__ = __webpack_require__(82);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Authentication = function () {
    function Authentication() {
        _classCallCheck(this, Authentication);

        this.clientId = __WEBPACK_IMPORTED_MODULE_1__env_js__["b" /* clientId */];
        this.clientSecret = __WEBPACK_IMPORTED_MODULE_1__env_js__["c" /* clientSecret */];
        this.message = {
            type: null,
            text: null
        };
        this.baseURL = __WEBPACK_IMPORTED_MODULE_1__env_js__["a" /* baseUrl */];

        if (localStorage.getItem('user_name')) {
            this.user = Object.assign({}, {
                name: localStorage.getItem('user_name'),
                email: localStorage.getItem('user_email'),
                roles: localStorage.getItem('user_roles'),
                pages: localStorage.getItem('user_pages')
            });

            if (this.user.pages !== 'undefined') {
                this.user.pages = JSON.parse(this.user.pages);
            }
        } else {
            this.user = null;
        }
    }

    _createClass(Authentication, [{
        key: 'clientId',
        value: function clientId() {
            return this.clientId;
        }
    }, {
        key: 'clientSecret',
        value: function clientSecret() {
            return this.clientSecret;
        }
    }, {
        key: 'check',
        value: function check() {
            return !!localStorage.getItem('access_token') && !this.expired();
        }
    }, {
        key: 'expired',
        value: function expired() {
            var minute = parseInt((Date.now() - parseInt(localStorage.getItem('token_create'))) / 1000);
            var expire = parseInt(localStorage.getItem('expires_in'));

            return minute >= expire;
        }
    }, {
        key: 'token',
        value: function token() {
            return localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token');
        }
    }, {
        key: 'fetchToken',
        value: function fetchToken(token) {
            localStorage.setItem('access_token', token.access_token);
            localStorage.setItem('expires_in', token.expires_in);
            localStorage.setItem('refresh_token', token.refresh_token);
            localStorage.setItem('token_type', token.token_type);
            localStorage.setItem('token_create', Date.now());
        }
    }, {
        key: 'removeToken',
        value: function removeToken() {
            localStorage.removeItem('access_token');
            localStorage.removeItem('expires_in');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('token_type');
            localStorage.removeItem('token_create');
        }
    }, {
        key: 'fetchUser',
        value: function fetchUser(user) {
            localStorage.setItem('user_name', user.name);
            localStorage.setItem('user_email', user.email);
            localStorage.setItem('user_roles', user.roles);
            localStorage.setItem('user_pages', JSON.stringify(user.pages));

            this.user = Object.assign({}, {
                name: user.name,
                email: user.email,
                roles: user.roles,
                pages: JSON.stringify(user.pages)
            });
        }
    }, {
        key: 'removeUser',
        value: function removeUser() {
            localStorage.removeItem('user_name');
            localStorage.removeItem('user_email');
            localStorage.removeItem('user_roles');
            localStorage.removeItem('user_pages');
        }
    }, {
        key: 'signout',
        value: function signout() {
            this.removeToken();
            this.removeUser();
        }
    }]);

    return Authentication;
}();

var Authent = {
    install: function install(Vue) {
        if (this.installed) return;

        this.installed = true;

        var $auth = new Authentication();

        Object.defineProperty(Vue.prototype, '$auth', {
            get: function get() {
                return $auth;
            }
        });

        Object.defineProperty(Vue.prototype, '$upload', {
            get: function get() {
                return {
                    button: document.getElementById('uploader'),

                    request: {
                        customHeaders: {
                            'Authorization': $auth.token()
                        },
                        endpoint: __WEBPACK_IMPORTED_MODULE_1__env_js__["a" /* baseUrl */] + 'api/upload',
                        filenameParam: 'fileName',
                        inputName: 'fileUpload',
                        uuidName: 'uuid',
                        totalFileSizeName: 'totalFileSize'
                    },

                    chunking: {
                        enabled: true,
                        mandatory: true,
                        paramNames: {
                            chunkSize: 'chunkSize',
                            partByteOffset: 'partByteOffset',
                            partIndex: 'partIndex',
                            totalParts: 'totalParts'
                        },
                        success: {
                            endpoint: __WEBPACK_IMPORTED_MODULE_1__env_js__["a" /* baseUrl */] + 'api/upload?completed=true'
                        }
                    },

                    callbacks: {
                        onUploadChunk: function onUploadChunk(id, name, data) {
                            window.apps.$set(window.apps.uploads, this.getUuid(id), Object.assign({ name: name }, data));
                        }
                    }
                };
            }
        });

        Object.defineProperty(Vue.prototype, '$http', {
            get: function get() {
                return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
                    baseURL: __WEBPACK_IMPORTED_MODULE_1__env_js__["a" /* baseUrl */],
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest',
                        'Authorization': $auth.token()
                    }
                });
            }
        });

        Object.defineProperty(Vue.prototype, '$error', {
            set: function set(text) {
                this.$root.message.type = 'error';
                this.$root.message.text = text;
                this.$root.message.show = true;
            }
        });

        Object.defineProperty(Vue.prototype, '$complete', {
            set: function set(text) {
                this.$root.message.type = 'success';
                this.$root.message.text = text;
                this.$root.message.show = true;
            }
        });

        Object.defineProperty(Vue.prototype, '$info', {
            set: function set(text) {
                this.$root.message.type = 'info';
                this.$root.message.text = text;
                this.$root.message.show = true;
            }
        });

        Object.defineProperty(Vue.prototype, '$form', {
            get: function get() {
                return this.$root.form;
            }
        });
    }
};

var Authorize = new Authentication();

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(56)
/* template */
var __vue_template__ = __webpack_require__(57)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/scripts/views/Auth.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7610ec30", Component.options)
  } else {
    hotAPI.reload("data-v-7610ec30", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 56 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'auth'
});

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { id: "monoland" } },
    [_c("v-content", [_c("router-view")], 1)],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7610ec30", module.exports)
  }
}

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Login__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Login__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Login___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Reset__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Reset___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Reset__);
/* unused harmony reexport Reset */



/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(60)
/* template */
var __vue_template__ = __webpack_require__(64)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/scripts/views/account/Login/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e4afe8c", Component.options)
  } else {
    hotAPI.reload("data-v-0e4afe8c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Login',

    data: function data() {
        return {
            email: 'dev@monoland.loc',
            password: 'rahasia'
        };
    },

    methods: {
        Signin: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var token, user;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return this.$http.post('/oauth/token', {
                                    grant_type: 'password',
                                    client_id: this.$auth.clientId,
                                    client_secret: this.$auth.clientSecret,
                                    username: this.email,
                                    password: this.password,
                                    scope: '*'
                                });

                            case 3:
                                token = _context.sent;


                                this.$auth.fetchToken(token.data);

                                _context.next = 7;
                                return this.$http.get('/api/user');

                            case 7:
                                user = _context.sent;


                                this.$auth.fetchUser(user.data);

                                this.$router.push({ name: 'Dashboard' });
                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](0);

                                this.$message('error', _context.t0.message);

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 12]]);
            }));

            function Signin() {
                return _ref.apply(this, arguments);
            }

            return Signin;
        }()
    }
});

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(62);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(63);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 63 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { fluid: "", "fill-height": "" } },
    [
      _c(
        "v-layout",
        { attrs: { "align-center": "", "justify-center": "" } },
        [
          _c(
            "v-card",
            { staticClass: "v-card__authent", attrs: { width: "450" } },
            [
              _c("v-card-title", [
                _c("h3", { staticClass: "headline" }, [_vm._v("Sign in")]),
                _vm._v(" "),
                _c("div", { staticClass: "describe" }, [
                  _vm._v("Enter your credential")
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    attrs: { label: "Email address" },
                    model: {
                      value: _vm.email,
                      callback: function($$v) {
                        _vm.email = $$v
                      },
                      expression: "email"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { label: "Your password" },
                    model: {
                      value: _vm.password,
                      callback: function($$v) {
                        _vm.password = $$v
                      },
                      expression: "password"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "a",
                    { staticClass: "v-card__link", attrs: { href: "#" } },
                    [_vm._v("Forgot password?")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "divider" }, [_vm._v("|")]),
                  _vm._v(" "),
                  _c(
                    "a",
                    { staticClass: "v-card__link", attrs: { href: "#" } },
                    [_vm._v("Create account")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { attrs: { color: "primary" }, on: { click: _vm.Signin } },
                    [_vm._v("Sign in")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0e4afe8c", module.exports)
  }
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(66)
/* template */
var __vue_template__ = __webpack_require__(67)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/scripts/views/account/Reset/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-63e1f1c0", Component.options)
  } else {
    hotAPI.reload("data-v-63e1f1c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 66 */
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
    name: 'Reset'
});

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { fluid: "", "fill-height": "" } },
    [
      _c(
        "v-layout",
        { attrs: { "align-center": "", "justify-center": "" } },
        [
          _c(
            "v-card",
            { staticClass: "v-card__authent", attrs: { width: "450" } },
            [
              _c("v-card-title", [
                _c("h3", { staticClass: "headline" }, [
                  _vm._v("Reset your password")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "describe" }, [
                  _vm._v("Enter your email address")
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [_c("v-text-field", { attrs: { label: "Email address" } })],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("v-btn", { attrs: { color: "primary" } }, [
                    _vm._v("Reset")
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-63e1f1c0", module.exports)
  }
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(69)
/* template */
var __vue_template__ = __webpack_require__(70)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/scripts/views/Page.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ba597962", Component.options)
  } else {
    hotAPI.reload("data-v-ba597962", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 69 */
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
    name: 'page',

    data: function data() {
        return {
            user: {
                name: null,
                email: null
            },
            menu: false,
            search: null
        };
    },

    mounted: function mounted() {
        this.user = this.$auth.user;
    },


    methods: {
        // 
    },

    watch: {
        // 
    }
});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { id: "monoland" } },
    [
      _c(
        "v-navigation-drawer",
        {
          staticClass: "grey lighten-4",
          attrs: { width: "240", fixed: "", clipped: "", app: "" }
        },
        [
          _c(
            "v-list",
            [
              _c(
                "v-list-tile",
                { attrs: { to: { name: "Dashboard" } } },
                [
                  _c("v-list-tile-action", [_c("v-icon", [_vm._v("home")])], 1),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [_c("v-list-tile-title", [_vm._v("Home")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-tile",
                [
                  _c(
                    "v-list-tile-action",
                    [_c("v-icon", [_vm._v("whatshot")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [_c("v-list-tile-title", [_vm._v("Trending")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-tile",
                [
                  _c(
                    "v-list-tile-action",
                    [_c("v-icon", [_vm._v("subscriptions")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [_c("v-list-tile-title", [_vm._v("Subscriptions")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-subheader", [_vm._v("Master")]),
              _vm._v(" "),
              _c(
                "v-list-tile",
                [
                  _c(
                    "v-list-tile-action",
                    [_c("v-icon", [_vm._v("history")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [_c("v-list-tile-title", [_vm._v("Program")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-tile",
                [
                  _c(
                    "v-list-tile-action",
                    [_c("v-icon", [_vm._v("watch_later")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [_c("v-list-tile-title", [_vm._v("School")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-tile",
                [
                  _c(
                    "v-list-tile-action",
                    [_c("v-icon", [_vm._v("thumb_up")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [_c("v-list-tile-title", [_vm._v("Expense")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-tile",
                [
                  _c(
                    "v-list-tile-action",
                    [_c("v-icon", [_vm._v("thumb_up")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [_c("v-list-tile-title", [_vm._v("District")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-subheader", [_vm._v("Transaction")]),
              _vm._v(" "),
              _c(
                "v-list-tile",
                [
                  _c(
                    "v-list-tile-action",
                    [_c("v-icon", [_vm._v("settings")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [_c("v-list-tile-title", [_vm._v("Planning")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-tile",
                [
                  _c("v-list-tile-action", [_c("v-icon", [_vm._v("flag")])], 1),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [_c("v-list-tile-title", [_vm._v("Realisation")])],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-toolbar",
        {
          attrs: {
            color: "white",
            height: "56",
            flat: "",
            fixed: "",
            "clipped-left": "",
            app: ""
          }
        },
        [
          _c("v-toolbar-side-icon"),
          _vm._v(" "),
          _c("v-toolbar-title", [_vm._v("Product Name")]),
          _vm._v(" "),
          _c("v-autocomplete", {
            attrs: { flat: "", solo: "", inverted: "" },
            model: {
              value: _vm.search,
              callback: function($$v) {
                _vm.search = $$v
              },
              expression: "search"
            }
          }),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { color: "grey--text", icon: "" } },
            [_c("v-icon", [_vm._v("notifications")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-menu",
            {
              attrs: { "nudge-width": 240, bottom: "", left: "" },
              model: {
                value: _vm.menu,
                callback: function($$v) {
                  _vm.menu = $$v
                },
                expression: "menu"
              }
            },
            [
              _c(
                "v-avatar",
                { attrs: { slot: "activator", size: "32" }, slot: "activator" },
                [
                  _c("img", {
                    attrs: { src: "/placeholder/people.jpeg", alt: "pict" }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "v-card__account" },
                [
                  _c(
                    "v-list",
                    { staticClass: "pt-0" },
                    [
                      _c(
                        "v-list-tile",
                        { attrs: { avatar: "" } },
                        [
                          _c("v-list-tile-avatar", [
                            _c("img", {
                              attrs: {
                                src: "/placeholder/people.jpeg",
                                alt: "pict"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [
                              _c("v-list-tile-title", [
                                _vm._v(_vm._s(_vm.user.name))
                              ]),
                              _vm._v(" "),
                              _c("v-list-tile-sub-title", [
                                _vm._v(_vm._s(_vm.user.email))
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        { attrs: { to: { name: "Setting" } } },
                        [
                          _c(
                            "v-list-tile-action",
                            [_c("v-icon", [_vm._v("settings")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [_c("v-list-tile-title", [_vm._v("Settings")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        [
                          _c(
                            "v-list-tile-action",
                            [_c("v-icon", [_vm._v("exit_to_app")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [_c("v-list-tile-title", [_vm._v("Sign out")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        [
                          _c(
                            "v-list-tile-action",
                            [_c("v-icon", [_vm._v("help")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [_c("v-list-tile-title", [_vm._v("Help")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        [
                          _c(
                            "v-list-tile-action",
                            [_c("v-icon", [_vm._v("feedback")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [
                              _c("v-list-tile-title", [_vm._v("Send feedback")])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-content", [_c("router-view", { key: _vm.$route.fullPath })], 1),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: {
            color: _vm.$root.message.type,
            timeout: _vm.$root.message.time
          },
          model: {
            value: _vm.$root.message.show,
            callback: function($$v) {
              _vm.$set(_vm.$root.message, "show", $$v)
            },
            expression: "$root.message.show"
          }
        },
        [
          _vm._v(
            "\n        " + _vm._s(_vm.$root.message.text) + "\n\n        "
          ),
          _c(
            "v-btn",
            {
              attrs: { dark: "", flat: "" },
              on: {
                click: function($event) {
                  _vm.$root.message.show = false
                }
              }
            },
            [_vm._v("close")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ba597962", module.exports)
  }
}

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dashboard__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dashboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Dashboard__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Dashboard___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Setting__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Setting___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Setting__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__Setting___default.a; });



/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(73)
/* template */
var __vue_template__ = __webpack_require__(74)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/scripts/views/backend/Dashboard/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e255a0c", Component.options)
  } else {
    hotAPI.reload("data-v-7e255a0c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 73 */
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
    name: 'dashboard'
});

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { fluid: "", "fill-height": "" } },
    [
      _c(
        "v-layout",
        { attrs: { column: "" } },
        [
          _c("v-flex", { staticClass: "page__header", attrs: { md12: "" } }, [
            _c(
              "div",
              { staticClass: "page__title" },
              [
                _c(
                  "v-avatar",
                  { attrs: { size: "56", color: "red" } },
                  [_c("v-icon", { attrs: { dark: "" } }, [_vm._v("home")])],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "page__title--text" }, [
                  _vm._v(
                    "\n                    Dashboard\n                    "
                  ),
                  _c("div", { staticClass: "subtitle" }, [
                    _vm._v("Some description goes here")
                  ])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "page__actions" }, [
              _c(
                "div",
                { staticClass: "page__actions--wrapper" },
                [
                  _c("v-btn", { attrs: { color: "red", dark: "" } }, [
                    _vm._v("Addnew")
                  ])
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "v-flex",
            { staticClass: "page__data", attrs: { md12: "" } },
            [
              _c(
                "v-container",
                { attrs: { "grid-list-md": "" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { row: "", wrap: "" } },
                    [
                      _c(
                        "v-flex",
                        { attrs: { md4: "" } },
                        [
                          _c(
                            "v-card",
                            { attrs: { color: "teal lighten-5", flat: "" } },
                            [_c("v-card-text", [_vm._v("1")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { md4: "" } },
                        [
                          _c(
                            "v-card",
                            { attrs: { color: "teal lighten-5", flat: "" } },
                            [_c("v-card-text", [_vm._v("1")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { md4: "" } },
                        [
                          _c(
                            "v-card",
                            { attrs: { color: "teal lighten-5", flat: "" } },
                            [_c("v-card-text", [_vm._v("1")])],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7e255a0c", module.exports)
  }
}

/***/ }),
/* 75 */,
/* 76 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return clientId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clientSecret; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseUrl; });
var clientId = 1;
var clientSecret = 'aC2PpFiwZh5pGonEp3ezm9JuidZhEkruft1gKYMF';
var baseUrl = 'http://backend57.loc/';

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(84)
/* template */
var __vue_template__ = __webpack_require__(85)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/scripts/views/Apps.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-937ffc9c", Component.options)
  } else {
    hotAPI.reload("data-v-937ffc9c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'apps'
});

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("router-view")
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-937ffc9c", module.exports)
  }
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(87)
/* template */
var __vue_template__ = __webpack_require__(88)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/scripts/views/backend/Setting/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6023b608", Component.options)
  } else {
    hotAPI.reload("data-v-6023b608", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 87 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'setting'
});

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { fluid: "", "fill-height": "" } },
    [
      _c(
        "v-layout",
        { attrs: { column: "" } },
        [_c("router-view", { key: _vm.$route.fullPath })],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6023b608", module.exports)
  }
}

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Account__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Account___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Account__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Account___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Landing__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Landing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Landing__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__Landing___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Password__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Password___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Password__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__Password___default.a; });




/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(91)
/* template */
var __vue_template__ = __webpack_require__(92)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/scripts/views/setting/Account/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4885d261", Component.options)
  } else {
    hotAPI.reload("data-v-4885d261", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 91 */
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
    name: 'profile',

    data: function data() {
        return {};
    }
});

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { staticClass: "py-2 px-0" },
    [
      _c(
        "v-layout",
        { attrs: { wrap: "" } },
        [
          _c(
            "v-flex",
            { attrs: { md8: "", "offset-md2": "" } },
            [
              _c("v-subheader", [_vm._v("Profile")]),
              _vm._v(" "),
              _c(
                "v-card",
                [
                  _c(
                    "v-layout",
                    [
                      _c("v-flex", { attrs: { md4: "" } }, [
                        _vm._v(
                          "\n                        PICTURE\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { md8: "" } },
                        [
                          _c(
                            "v-form",
                            [
                              _c("v-text-field", {
                                attrs: { label: "User name" }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { label: "Email address" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c("v-btn", { attrs: { flat: "" } }, [_vm._v("Save")])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4885d261", module.exports)
  }
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(94)
/* template */
var __vue_template__ = __webpack_require__(95)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/scripts/views/setting/Password/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-219e91bd", Component.options)
  } else {
    hotAPI.reload("data-v-219e91bd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 94 */
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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'password',

    data: function data() {
        return {};
    }
});

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { staticClass: "py-2 px-0" },
    [
      _c(
        "v-layout",
        { attrs: { wrap: "" } },
        [
          _c(
            "v-flex",
            { attrs: { md8: "", "offset-md2": "" } },
            [
              _c("v-subheader", [_vm._v("Profile")]),
              _vm._v(" "),
              _c(
                "v-card",
                [
                  _c(
                    "v-layout",
                    [
                      _c("v-flex", { attrs: { md4: "" } }, [
                        _vm._v(
                          "\n                        PICTURE\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { md8: "" } },
                        [
                          _c(
                            "v-form",
                            [
                              _c("v-text-field", {
                                attrs: { label: "Old password" }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { label: "New Password" }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { label: "Confirmation" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c("v-btn", { attrs: { flat: "" } }, [_vm._v("Save")])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-219e91bd", module.exports)
  }
}

/***/ }),
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(100)
/* template */
var __vue_template__ = __webpack_require__(101)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/scripts/views/setting/Landing/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66d325cb", Component.options)
  } else {
    hotAPI.reload("data-v-66d325cb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 100 */
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
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'setting',

    data: function data() {
        return {
            // 
        };
    }
});

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { staticClass: "py-2 px-0" },
    [
      _c(
        "v-layout",
        { attrs: { wrap: "" } },
        [
          _c(
            "v-flex",
            { attrs: { md8: "", "offset-md2": "" } },
            [
              _c("v-subheader", [_vm._v("Profile")]),
              _vm._v(" "),
              _c(
                "v-card",
                [
                  _c(
                    "v-list",
                    { attrs: { "two-line": "", subheader: "" } },
                    [
                      _c(
                        "v-list-tile",
                        { attrs: { avatar: "", to: { name: "Account" } } },
                        [
                          _c(
                            "v-list-tile-content",
                            [
                              _c("v-list-tile-title", [_vm._v("Account Info")]),
                              _vm._v(" "),
                              _c("v-list-tile-sub-title", [
                                _vm._v("Change your profile")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-action",
                            [_c("v-icon", [_vm._v("keyboard_arrow_right")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        { attrs: { avatar: "", to: { name: "Password" } } },
                        [
                          _c(
                            "v-list-tile-content",
                            [
                              _c("v-list-tile-title", [_vm._v("Password")]),
                              _vm._v(" "),
                              _c("v-list-tile-sub-title", [
                                _vm._v("Change your password")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-action",
                            [_c("v-icon", [_vm._v("keyboard_arrow_right")])],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-subheader", [_vm._v("Application")]),
              _vm._v(" "),
              _c(
                "v-card",
                [
                  _c(
                    "v-list",
                    { attrs: { "two-line": "", subheader: "" } },
                    [
                      _c(
                        "v-list-tile",
                        { attrs: { avatar: "" } },
                        [
                          _c(
                            "v-list-tile-content",
                            [
                              _c("v-list-tile-title", [_vm._v("Periode")]),
                              _vm._v(" "),
                              _c("v-list-tile-sub-title", [
                                _vm._v("Change your active periode")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-action",
                            [_c("v-icon", [_vm._v("keyboard_arrow_right")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        { attrs: { avatar: "" } },
                        [
                          _c(
                            "v-list-tile-content",
                            [
                              _c("v-list-tile-title", [_vm._v("Schedule")]),
                              _vm._v(" "),
                              _c("v-list-tile-sub-title", [
                                _vm._v("Change your schedule")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-action",
                            [_c("v-icon", [_vm._v("keyboard_arrow_right")])],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-66d325cb", module.exports)
  }
}

/***/ })
],[15]);