(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["VueDynamicInput"] = factory(require("lodash"));
	else
		root["VueDynamicInput"] = factory(root["_"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_lodash__) {
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/index.js?!./src/RestoreInput.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/RestoreInput.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  name: \"restore-input\",\r\n  inheritAttrs: false,\r\n  data: _ => ({\r\n    restoreValue: null\r\n  }),\r\n  methods: {\r\n    handleFocus(event) {\r\n      this.restoreValue = this.$attrs.value;\r\n    },\r\n    handleBlur(event) {\r\n      let canRestore = this.$el.dataset.restore === \"true\";\r\n      if (canRestore) this.$emit(\"input\", this.restoreValue);\r\n      this.$el.dataset.restore = \"true\";\r\n    }\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://VueDynamicInput/./src/RestoreInput.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/SmartInput.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/SmartInput.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n//\n//\n//\n//\n//\n//\n\r\n// Needed for handling of paste events\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  name: \"smart-input\",\r\n  props: {\r\n    type: { type: String, default: \"text\" },\r\n    value: { default: null },\r\n    placeholder: { type: String }\r\n  },\r\n  // The component must track whether its element is focused so it\r\n  // knows whether to update `$input.type` and `$input.value`\r\n  data: _ => ({\r\n    isFocused: false,\r\n    ignoreValue: false\r\n  }),\r\n  // Ensure the input value is set to `this.value`\r\n  // when the input element is initially created\r\n  mounted() {\r\n    let value = this.stringify(this.value);\r\n    [value] = this.format(value, value.length);\r\n    \r\n    // The element's value can simply be set directly because no\r\n    // `input` event needs to be emitted; An `input` value occurs\r\n    // only when a change originates in the input element\r\n    this.$el.value = value;\r\n\r\n    // Ensures paste events are restricted and formatted properly\r\n    this.$el.addEventListener(\"paste\", event => {\r\n      event.preventDefault();\r\n      let value = event.clipboardData.getData(\"text\");\r\n      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"insertValue\"])(this.$el, this.types, value);\r\n    });\r\n  },\r\n  computed: {\r\n    valid() {\r\n      return this.types[this.type].valid;\r\n    },\r\n    invalid() {\r\n      return this.types[this.type].invalid;\r\n    },\r\n    format() {\r\n      return this.types[this.type].format;\r\n    },\r\n    parse() {\r\n      return this.types[this.type].parse;\r\n    },\r\n    stringify() {\r\n      return this.types[this.type].stringify;\r\n    },\r\n    // Combined with the `v-on` directive in the template, this forwards\r\n    // all events on the input element up to the parent component EXCEPT\r\n    // the `input` event which is handled specially to allow `v-model`\r\n    listeners() {\r\n      let { input, ...listeners } = this.$listeners;\r\n      return listeners;\r\n    }\r\n  },\r\n  methods: {\r\n    validity(value) {\r\n      let isValid = this.valid.bind(this)(value);\r\n      let isInvalid = this.invalid.bind(this)(value);\r\n      return isInvalid ? false : isValid ? true : null;\r\n    },\r\n    handleInput(event) {\r\n      // The purpose of `this.ignoreValue` is to ensure that the parsed\r\n      // value does not overwrite the input when `watch.value` is called\r\n      let parsedValue = this.parse(this.$el.value);\r\n      if (parsedValue !== this.value) this.ignoreValue = true;\r\n      this.$emit(\"input\", parsedValue);\r\n\r\n      if (this.isFocused) {\r\n        this.tracking.value = this.$el.value;\r\n        this.tracking.validity = this.validity(this.$el.value);\r\n        this.tracking.parsed = parsedValue;\r\n      }\r\n    },\r\n    handleFocus(event) {\r\n      this.isFocused = true;\r\n\r\n      this.tracking.active = true;\r\n      this.tracking.type = this.type;\r\n      this.tracking.value = this.$el.value;\r\n      this.tracking.validity = this.validity(this.$el.value);\r\n      this.tracking.parsed = this.parse(this.$el.value);\r\n    },\r\n    handleBlur(event) {\r\n      this.isFocused = false;\r\n      this.tracking.active = false;\r\n      this.$el.value = this.stringify(this.value);\r\n    }\r\n  },\r\n  watch: {\r\n    // Update `$input.type` if `this.type` changes\r\n    // while the input element is focused\r\n    type(value) {\r\n      if (this.isFocused) this.tracking.type = value;\r\n    },\r\n    // Update the input value if `this.value` changes, unless the change\r\n    // was caused by an `input` event emitted by this component\r\n    // (Note that no `input` event is dispatched to prevent\r\n    // a loop where the `input` event emitted to the parent\r\n    // component causes this function to be called again)\r\n    value(value) {\r\n      if (this.ignoreValue) this.ignoreValue = false;\r\n      else {\r\n        value = this.stringify(value);\r\n        [value] = this.format(value, value.length);\r\n\r\n        // The element's value can simply be set directly because no\r\n        // `input` event needs to be emitted; An `input` value occurs\r\n        // only when a change originates in the input element\r\n        this.$el.value = value;\r\n      }\r\n    }\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://VueDynamicInput/./src/SmartInput.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/RestoreInput.vue?vue&type=template&id=2c5da455&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/RestoreInput.vue?vue&type=template&id=2c5da455& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"smart-input\",\n    _vm._g(\n      _vm._b(\n        {\n          attrs: { \"data-restore\": \"true\" },\n          on: { focus: _vm.handleFocus, blur: _vm.handleBlur }\n        },\n        \"smart-input\",\n        _vm.$attrs,\n        false\n      ),\n      _vm.$listeners\n    )\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://VueDynamicInput/./src/RestoreInput.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/SmartInput.vue?vue&type=template&id=061257ba&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/SmartInput.vue?vue&type=template&id=061257ba& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"input\",\n    _vm._g(\n      {\n        attrs: { \"data-smart\": _vm.type, placeholder: _vm.placeholder },\n        on: {\n          input: _vm.handleInput,\n          focus: _vm.handleFocus,\n          blur: _vm.handleBlur\n        }\n      },\n      _vm.listeners\n    )\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://VueDynamicInput/./src/SmartInput.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://VueDynamicInput/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./src/RestoreInput.vue":
/*!******************************!*\
  !*** ./src/RestoreInput.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RestoreInput_vue_vue_type_template_id_2c5da455___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RestoreInput.vue?vue&type=template&id=2c5da455& */ \"./src/RestoreInput.vue?vue&type=template&id=2c5da455&\");\n/* harmony import */ var _RestoreInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RestoreInput.vue?vue&type=script&lang=js& */ \"./src/RestoreInput.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _RestoreInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _RestoreInput_vue_vue_type_template_id_2c5da455___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _RestoreInput_vue_vue_type_template_id_2c5da455___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/RestoreInput.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://VueDynamicInput/./src/RestoreInput.vue?");

/***/ }),

/***/ "./src/RestoreInput.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./src/RestoreInput.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_RestoreInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./RestoreInput.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/RestoreInput.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_RestoreInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://VueDynamicInput/./src/RestoreInput.vue?");

/***/ }),

/***/ "./src/RestoreInput.vue?vue&type=template&id=2c5da455&":
/*!*************************************************************!*\
  !*** ./src/RestoreInput.vue?vue&type=template&id=2c5da455& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RestoreInput_vue_vue_type_template_id_2c5da455___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./RestoreInput.vue?vue&type=template&id=2c5da455& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/RestoreInput.vue?vue&type=template&id=2c5da455&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RestoreInput_vue_vue_type_template_id_2c5da455___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RestoreInput_vue_vue_type_template_id_2c5da455___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://VueDynamicInput/./src/RestoreInput.vue?");

/***/ }),

/***/ "./src/SmartInput.vue":
/*!****************************!*\
  !*** ./src/SmartInput.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SmartInput_vue_vue_type_template_id_061257ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SmartInput.vue?vue&type=template&id=061257ba& */ \"./src/SmartInput.vue?vue&type=template&id=061257ba&\");\n/* harmony import */ var _SmartInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SmartInput.vue?vue&type=script&lang=js& */ \"./src/SmartInput.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _SmartInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _SmartInput_vue_vue_type_template_id_061257ba___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _SmartInput_vue_vue_type_template_id_061257ba___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/SmartInput.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://VueDynamicInput/./src/SmartInput.vue?");

/***/ }),

/***/ "./src/SmartInput.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./src/SmartInput.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_SmartInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./SmartInput.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/SmartInput.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_SmartInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://VueDynamicInput/./src/SmartInput.vue?");

/***/ }),

/***/ "./src/SmartInput.vue?vue&type=template&id=061257ba&":
/*!***********************************************************!*\
  !*** ./src/SmartInput.vue?vue&type=template&id=061257ba& ***!
  \***********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SmartInput_vue_vue_type_template_id_061257ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./SmartInput.vue?vue&type=template&id=061257ba& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/SmartInput.vue?vue&type=template&id=061257ba&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SmartInput_vue_vue_type_template_id_061257ba___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SmartInput_vue_vue_type_template_id_061257ba___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://VueDynamicInput/./src/SmartInput.vue?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: setValue, clearValue, insertValue, backspaceValue, confirmValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setValue\", function() { return setValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearValue\", function() { return clearValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertValue\", function() { return insertValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backspaceValue\", function() { return backspaceValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"confirmValue\", function() { return confirmValue; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n// Written by Aaron Beaudoin at Union College\r\n\r\n\r\n\r\nfunction getTypeConfig(element, types) {\r\n  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"defaultTo\"])(types[element.dataset.smart], types[\"text\"]);\r\n}\r\n\r\nfunction applyValue(element, value, caretIndex) {\r\n  if (caretIndex === undefined) caretIndex = value.length;\r\n\r\n  element.value = value;\r\n  element.selectionStart = caretIndex;\r\n  element.selectionEnd = caretIndex;\r\n  element.dispatchEvent(new Event(\"input\"));\r\n}\r\n\r\nfunction setValue(element, types, value, caretIndex) {\r\n  let config = getTypeConfig(element, types);\r\n  if (!config.restrict(value)) return;\r\n  if (!config.dynamicRestrict(value)) return;\r\n  applyValue(element, ...config.format(value, caretIndex));\r\n}\r\n\r\nfunction clearValue(element, types) {\r\n  let config = getTypeConfig(element, types);\r\n  applyValue(element, ...config.format(\"\", 0));\r\n}\r\n\r\n// Input validation must be performed at this step (before the input\r\n// value is actually set) and not in the component to prevent the\r\n// incorrect value from briefly appearing on-screen; Input formatting\r\n// must be done here for a similar reason (to manage the caret properly)\r\n// A data attribute MUST be used to detect the type of the input because\r\n// there is no way to reference its Vue component directly other than\r\n// element.__vue__, which can apparently have issues if the page\r\n// has more than one instance of Vue created on it\r\nfunction insertValue(element, types, value) {\r\n  let beforeSelect = element.value.substring(0, element.selectionStart);\r\n  let afterSelect = element.value.substring(element.selectionEnd);\r\n  \r\n  let inputValue = beforeSelect + value + afterSelect;\r\n  let caretIndex = (beforeSelect + value).length;\r\n\r\n  let config = getTypeConfig(element, types);\r\n  if (!config.restrict(inputValue)) return;\r\n  if (!config.dynamicRestrict(inputValue)) return;\r\n  applyValue(element, ...config.format(inputValue, caretIndex));\r\n}\r\n\r\nfunction backspaceValue(element, types) {\r\n  let hasSelection = element.selectionEnd !== element.selectionStart;\r\n  let selectionStart = element.selectionStart - (hasSelection ? 0 : 1);\r\n  let beforeSelect = element.value.substring(0, selectionStart);\r\n  let afterSelect = element.value.substring(element.selectionEnd);\r\n  \r\n  let inputValue = beforeSelect + afterSelect;\r\n  let caretIndex = beforeSelect.length;\r\n\r\n  let config = getTypeConfig(element, types);\r\n  applyValue(element, ...config.format(inputValue, caretIndex));\r\n}\r\n\r\nfunction confirmValue(element) {\r\n  if (\"restore\" in element.dataset) element.dataset.restore = \"false\";\r\n}\r\n\n\n//# sourceURL=webpack://VueDynamicInput/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: install, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"install\", function() { return install; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ \"./src/types.js\");\n/* harmony import */ var _SmartInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SmartInput */ \"./src/SmartInput.vue\");\n/* harmony import */ var _RestoreInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RestoreInput */ \"./src/RestoreInput.vue\");\n// Written by Aaron Beaudoin at Union College\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Input formatting in this plugin works, but it sucks because you have\r\n// to write your own login for keeping track of the caret position\r\n// and making sure you keep it in the right position as the input changes\r\n// In the future I would like to mimic the behavior of this library:\r\n// https://nosir.github.io/cleave.js/\r\nfunction install(Vue, options) {\r\n  Vue.prototype.$input = {};\r\n  Vue.prototype.$input.restrict = null;\r\n\r\n  let defaultType = {\r\n    restrict: _ => true,\r\n    dynamicRestrict: _ => {\r\n      let restrict = Vue.prototype.$input.restrict;\r\n      return restrict ? restrict(_) : true;\r\n    },\r\n    valid: value => value.length > 0,\r\n    invalid: _ => false,\r\n    format: (_, __) => [_, __],\r\n    parse: _ => _,\r\n    stringify: _ => Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"toString\"])(_)\r\n  };\r\n\r\n  let types = {\r\n    text: defaultType,\r\n    ...Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"forEach\"])(_types__WEBPACK_IMPORTED_MODULE_2__[\"default\"], type => Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"defaults\"])(type, defaultType)),\r\n    ...Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"forEach\"])(options, type => Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"defaults\"])(type, defaultType))\r\n  };\r\n\r\n  let tracking = Vue.observable({\r\n    active: false,\r\n    type: null,\r\n    value: \"\",\r\n    validity: null,\r\n    parsed: null\r\n  });\r\n\r\n  Vue.component(_RestoreInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"].name, _RestoreInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\n  Vue.component(_SmartInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"].name, {\r\n    ..._SmartInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], \r\n    mixins: [{\r\n      beforeCreate() {\r\n        this.types = types;\r\n        this.tracking = tracking;\r\n      }\r\n    }]\r\n  });\r\n\r\n  // We need to do custom handling for all keyboard input events in\r\n  // order to validate text BEFORE it is added to an input\r\n  document.addEventListener(\"keydown\", event => {\r\n\r\n    // The `smart-input` component adds the `data-smart` attribute\r\n    // to signal that the input element should be treated specially\r\n    if (!event.target.dataset.smart) return;\r\n\r\n    // If the length of `event.key` is one, we assume that the key\r\n    // is a printable character like \"a\", \"3\", or \"?\"\r\n    let printable = event.key.length === 1;\r\n\r\n    // If a modified key is being held down we want to let the event\r\n    // proceed as usual so keyboard shortcuts don't break\r\n    let modifiers = event.ctrlKey || event.altKey || event.metaKey;\r\n\r\n    // Printable character behavior is handled by a custom function\r\n    if (printable && !modifiers) {\r\n      event.preventDefault();\r\n      _helpers__WEBPACK_IMPORTED_MODULE_1__[\"insertValue\"](document.activeElement, types, event.key);\r\n    \r\n    // Backspace behavior is handled by a custom function\r\n    } else if (event.key === \"Backspace\") {\r\n      event.preventDefault();\r\n      _helpers__WEBPACK_IMPORTED_MODULE_1__[\"backspaceValue\"](document.activeElement, types);\r\n    \r\n    // Tab is blocked to prevent cycling through focusable elements\r\n    // This may need to be done before the element check at the\r\n    // top of the listener but for now we'll see\r\n    } else if (event.key === \"Tab\") {\r\n      event.preventDefault();\r\n    }\r\n  });\r\n\r\n  // In order for on-screen numpads and keyboards to work properly we\r\n  // need to keep their buttons from removing focus from active inputs\r\n  document.addEventListener(\"mousedown\", event => {\r\n\r\n    // If the element or any parent above it in the tree has\r\n    // the `.blurry` class then block its regular behavior\r\n    if (event.target.closest(\".blurry\")) event.preventDefault();\r\n  });\r\n\r\n  Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"forEach\"])(tracking, (property, name) => {\r\n    Object.defineProperty(Vue.prototype.$input, name, {\r\n      // Using `property` simply returns the value of the property at the\r\n      // time that `forEach` was called, which is not what we want\r\n      get() { return tracking[name]; },\r\n      enumerable: true,\r\n      configurable: true\r\n    });\r\n  });\r\n\r\n  Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"forEach\"])(_helpers__WEBPACK_IMPORTED_MODULE_1__, (helper, name) => {\r\n    Object.defineProperty(Vue.prototype.$input, name, {\r\n      value: (...args) => {\r\n        let activeInput = document.activeElement;\r\n        if (!activeInput.dataset.smart) return;\r\n        helper(activeInput, types, ...args);\r\n      },\r\n      writable: true,\r\n      enumerable: true,\r\n      configurable: true\r\n    });\r\n  });\r\n};\r\n\r\nlet plugin = { install: install };\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (plugin);\r\n\r\n// let globalVue = null;\r\n// if (typeof window !== \"undefined\") globalVue = window.Vue;\r\n// else if (typeof global !== \"undefined\") globalVue = global.Vue;\r\n// if (globalVue) globalVue.use(plugin);\r\n\n\n//# sourceURL=webpack://VueDynamicInput/./src/index.js?");

/***/ }),

/***/ "./src/types.js":
/*!**********************!*\
  !*** ./src/types.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n// Written by Aaron Beaudoin at Union College\r\n\r\n\r\n\r\nfunction stripLeadingZeros(value, caretIndex) {\r\n  return [value.replace(/^0+([0-9]\\.?)/, \"$1\"), caretIndex];\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  number: {\r\n    restrict: value => /^[0-9]*\\.?[0-9]*$/.test(value),\r\n    format: stripLeadingZeros,\r\n    parse: value => Number(value)\r\n  },\r\n  boolean: {\r\n    parse: value => [\"true\", \"t\", \"yes\", \"y\"].includes(Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"toUpper\"])(value))\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://VueDynamicInput/./src/types.js?");

/***/ }),

/***/ "lodash":
/*!*************************************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash","root":"_"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;\n\n//# sourceURL=webpack://VueDynamicInput/external_%7B%22commonjs%22:%22lodash%22,%22commonjs2%22:%22lodash%22,%22amd%22:%22lodash%22,%22root%22:%22_%22%7D?");

/***/ })

/******/ });
});