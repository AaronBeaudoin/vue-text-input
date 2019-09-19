(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["VueTextInput"] = factory(require("lodash"));
	else
		root["VueTextInput"] = factory(root["_"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/index.js?!./src/TextInput.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/TextInput.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _inputConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputConfig */ \"./src/inputConfig.js\");\n/* harmony import */ var _inputListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputListeners */ \"./src/inputListeners.js\");\n/* harmony import */ var _inputMethods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputMethods */ \"./src/inputMethods.js\");\n//\n//\n//\n//\n//\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  name: \"text-input\",\r\n  mixins: [\r\n    { computed: _inputConfig__WEBPACK_IMPORTED_MODULE_0__ },\r\n    { methods: _inputListeners__WEBPACK_IMPORTED_MODULE_1__ },\r\n    { methods: _inputMethods__WEBPACK_IMPORTED_MODULE_2__ }\r\n  ],\r\n  props: {\r\n    type: { type: String, default: \"text\" },\r\n    restrict: { type: [Function, Array], default: null },\r\n    validate: { type: [Function, Array], default: null },\r\n    invalidate: { type: [Function, Array], default: null },\r\n    format: { type: Function, default: null },\r\n    parse: { type: Function, default: null },\r\n    stringify: { type: Function, default: null },\r\n    value: { default: null },\r\n    restore: { type: Boolean, default: false },\r\n    live: { type: Boolean, default: true },\r\n    select: { type: Boolean, default: false },\r\n    clear: { type: Boolean, default: false }\r\n  },\r\n  data() {\r\n    return {\r\n      inputValue: null,\r\n      dataValue: null,\r\n      restoreValue: null,\r\n      canRestore: true\r\n    };\r\n  },\r\n  computed: {\r\n    listeners() {\r\n      let { input, focus, blur, ...listeners } = this.$listeners;\r\n      return listeners;\r\n    },\r\n    isActive() {\r\n      return this.$options.pluginData.instance === this;\r\n    },\r\n    typeConfig() {\r\n      let types = this.$options.pluginData.types;\r\n      return this.type in types ? types[this.type] : types[\"text\"];\r\n    },\r\n    validity() {\r\n      if (this.inputValue === null) return null;\r\n      \r\n      let isValid = this.inputValidate(this.inputValue);\r\n      let isInvalid = this.inputInvalidate(this.inputValue);\r\n      return isInvalid ? false : isValid ? true : null;\r\n    }\r\n  },\r\n  mounted() {\r\n    this.dataValue = this.value;\r\n    this.updateValue(this.dataValue);\r\n\r\n    this.$el.addEventListener(\"keydown\", this.keydownListener);\r\n    this.$el.addEventListener(\"paste\", this.pasteListener);\r\n    if (this.select) this.$el.addEventListener(\"focus\", this.selectListener);\r\n    if (this.clear) this.$el.addEventListener(\"focus\", this.clearListener);\r\n  },\r\n  methods: {\r\n    updateValue(value) {\r\n      this.inputValue = this.inputFormat(this.inputStringify(value))[0];\r\n      this.$el.value = this.inputValue;\r\n    },\r\n    handleInput() {\r\n      this.inputValue = this.$el.value;\r\n      if (this.live) {\r\n        this.dataValue = this.inputParse(this.$el.value);\r\n        this.$emit(\"input\", this.dataValue);\r\n      }\r\n    },\r\n    handleFocus() {\r\n      if (this.restore) this.restoreValue = this.dataValue;\r\n      \r\n      this.$options.pluginData.instance = this;\r\n      this.$emit(\"focus\", this);\r\n    },\r\n    handleBlur() {\r\n      if (this.restore && this.canRestore) {\r\n        this.dataValue = this.restoreValue;\r\n        this.$emit(\"input\", this.dataValue);\r\n      } else if (!this.live) {\r\n        this.dataValue = this.inputParse(this.inputValue);\r\n        this.$emit(\"input\", this.dataValue);\r\n      }\r\n\r\n      this.updateValue(this.dataValue);\r\n      if (this.restore && !this.canRestore) this.canRestore = true;\r\n\r\n      this.$options.pluginData.instance = null;\r\n      this.$emit(\"blur\", this);\r\n    }\r\n  },\r\n  watch: {\r\n    value(value) {\r\n      this.dataValue = value;\r\n      if (!this.isActive) this.updateValue(this.dataValue);\r\n    },\r\n    validity(value) {\r\n      this.$emit(\"validity\", value);\r\n    }\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://VueTextInput/./src/TextInput.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/TextInput.vue?vue&type=template&id=28d73718&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/TextInput.vue?vue&type=template&id=28d73718& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"input\",\n    _vm._g(\n      _vm._b(\n        {\n          on: {\n            input: _vm.handleInput,\n            focus: _vm.handleFocus,\n            blur: _vm.handleBlur\n          }\n        },\n        \"input\",\n        _vm.$attrs,\n        false\n      ),\n      _vm.listeners\n    )\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://VueTextInput/./src/TextInput.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://VueTextInput/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./src/TextInput.vue":
/*!***************************!*\
  !*** ./src/TextInput.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TextInput_vue_vue_type_template_id_28d73718___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextInput.vue?vue&type=template&id=28d73718& */ \"./src/TextInput.vue?vue&type=template&id=28d73718&\");\n/* harmony import */ var _TextInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextInput.vue?vue&type=script&lang=js& */ \"./src/TextInput.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _TextInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _TextInput_vue_vue_type_template_id_28d73718___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _TextInput_vue_vue_type_template_id_28d73718___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/TextInput.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://VueTextInput/./src/TextInput.vue?");

/***/ }),

/***/ "./src/TextInput.vue?vue&type=script&lang=js&":
/*!****************************************************!*\
  !*** ./src/TextInput.vue?vue&type=script&lang=js& ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_TextInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./TextInput.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/TextInput.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_TextInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://VueTextInput/./src/TextInput.vue?");

/***/ }),

/***/ "./src/TextInput.vue?vue&type=template&id=28d73718&":
/*!**********************************************************!*\
  !*** ./src/TextInput.vue?vue&type=template&id=28d73718& ***!
  \**********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextInput_vue_vue_type_template_id_28d73718___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./TextInput.vue?vue&type=template&id=28d73718& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/TextInput.vue?vue&type=template&id=28d73718&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextInput_vue_vue_type_template_id_28d73718___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextInput_vue_vue_type_template_id_28d73718___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://VueTextInput/./src/TextInput.vue?");

/***/ }),

/***/ "./src/format.js":
/*!***********************!*\
  !*** ./src/format.js ***!
  \***********************/
/*! exports provided: resetNumeric, insertAt, trimLeadingZeros */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetNumeric\", function() { return resetNumeric; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertAt\", function() { return insertAt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"trimLeadingZeros\", function() { return trimLeadingZeros; });\nfunction resetNumeric(value, caretIndex) {\r\n  let caretDecrement = 0;\r\n  value = value.replace(/[^0-9]/g, (_, index) => {\r\n    if (caretIndex > index) caretDecrement += 1;\r\n    return \"\";\r\n  });\r\n\r\n  let pair = [value, caretIndex - caretDecrement];\r\n  return pair;\r\n}\r\n\r\nfunction insertAt(value, caretIndex, index, character) {\r\n  if (value.length > index && value[index] !== character) {\r\n    value = value.slice(0, index) + character + value.slice(index);\r\n    if (caretIndex > index) caretIndex += 1;\r\n  }\r\n\r\n  let pair = [value, caretIndex];\r\n  return pair;\r\n}\r\n\r\nfunction trimLeadingZeros(value, caretIndex) {\r\n  if (value.length < 2) return [value, caretIndex];\r\n  else if (value[0] === \"0\" && value[1] !== \".\") value = value.slice(1);\r\n\r\n  let pair = [value, caretIndex];\r\n  return pair;\r\n}\r\n\n\n//# sourceURL=webpack://VueTextInput/./src/format.js?");

/***/ }),

/***/ "./src/inputConfig.js":
/*!****************************!*\
  !*** ./src/inputConfig.js ***!
  \****************************/
/*! exports provided: inputRestrict, inputValidate, inputInvalidate, inputFormat, inputParse, inputStringify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputRestrict\", function() { return inputRestrict; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputValidate\", function() { return inputValidate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputInvalidate\", function() { return inputInvalidate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputFormat\", function() { return inputFormat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputParse\", function() { return inputParse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputStringify\", function() { return inputStringify; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nfunction overwriteTypeFuncArray(name, logicalAnd) {\r\n  return function() {\r\n    let defaultValue = this.typeConfig[name];\r\n    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"isArray\"])(defaultValue)) {\r\n      if (logicalAnd) defaultValue = Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"overEvery\"])(defaultValue);\r\n      else defaultValue = Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"overSome\"])(defaultValue);\r\n    }\r\n\r\n    let overwriteValue = this[name];\r\n    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"isArray\"])(overwriteValue)) {\r\n      if (logicalAnd) overwriteValue = Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"overEvery\"])(overwriteValue);\r\n      else overwriteValue = Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"overSome\"])(overwriteValue);\r\n    }\r\n\r\n    if (overwriteValue === null) return defaultValue;\r\n    if (logicalAnd) return _ => defaultValue(_) && overwriteValue(_);\r\n    else return _ => defaultValue(_) || overwriteValue(_);\r\n  };\r\n}\r\n\r\nfunction overwriteTypeFunc(name) {\r\n  return function() {\r\n    let defaultFunc = this.typeConfig[name];\r\n    return this[name] === null ? defaultFunc : this[name];\r\n  };\r\n}\r\n\r\nlet inputRestrict = overwriteTypeFuncArray(\"restrict\");\r\nlet inputValidate = overwriteTypeFuncArray(\"validate\", true);\r\nlet inputInvalidate = overwriteTypeFuncArray(\"invalidate\");\r\n\r\nlet inputFormat = overwriteTypeFunc(\"format\");\r\nlet inputParse = overwriteTypeFunc(\"parse\");\r\nlet inputStringify = overwriteTypeFunc(\"stringify\");\r\n\n\n//# sourceURL=webpack://VueTextInput/./src/inputConfig.js?");

/***/ }),

/***/ "./src/inputListeners.js":
/*!*******************************!*\
  !*** ./src/inputListeners.js ***!
  \*******************************/
/*! exports provided: keydownListener, pasteListener, selectListener, clearListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"keydownListener\", function() { return keydownListener; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pasteListener\", function() { return pasteListener; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectListener\", function() { return selectListener; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearListener\", function() { return clearListener; });\nfunction keydownListener(event) {\r\n  if (this.$input.block(event)) return event.preventDefault();\r\n  let modifiers = event.ctrlKey || event.altKey || event.metaKey;\r\n\r\n  if (event.key.length === 1 && !modifiers) this.insert(event.key);\r\n  else if (event.key === \"Backspace\") this.backspace();\r\n  else if (event.key === \"Delete\") this.backspace(true);\r\n  else return;\r\n  event.preventDefault();\r\n}\r\n\r\nfunction pasteListener(event) {\r\n  event.preventDefault();\r\n  this.insert(event.clipboardData.getData(\"text\"));\r\n}\r\n\r\nfunction selectListener(event) {\r\n  this.$el.addEventListener(\"mouseup\", function listener(event) {\r\n    event.target.selectionStart = 0;\r\n    event.target.selectionEnd = event.target.value.length;\r\n    event.target.removeEventListener(\"mouseup\", listener);\r\n  });\r\n}\r\n\r\nfunction clearListener(event) {\r\n  this.$el.value = this.inputValue = \"\";\r\n}\r\n\n\n//# sourceURL=webpack://VueTextInput/./src/inputListeners.js?");

/***/ }),

/***/ "./src/inputMethods.js":
/*!*****************************!*\
  !*** ./src/inputMethods.js ***!
  \*****************************/
/*! exports provided: insert, set, backspace, confirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insert\", function() { return insert; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"set\", function() { return set; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backspace\", function() { return backspace; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"confirm\", function() { return confirm; });\nfunction apply(value, caretIndex) {\r\n  if (caretIndex === undefined) caretIndex = value.length;\r\n\r\n  this.$el.value = value;\r\n  this.$el.selectionStart = caretIndex;\r\n  this.$el.selectionEnd = caretIndex;\r\n  this.$el.dispatchEvent(new Event(\"input\"));\r\n}\r\n\r\nfunction insert(value, selectStart, selectEnd) {\r\n  if (selectStart === undefined) selectStart = this.$el.selectionStart;\r\n  if (selectEnd === undefined) selectEnd = this.$el.selectionEnd;\r\n  \r\n  let beforeSelect = this.$el.value.substring(0, selectStart);\r\n  let afterSelect = this.$el.value.substring(selectEnd);\r\n\r\n  let inputValue = beforeSelect + value + afterSelect;\r\n  let caretIndex = (beforeSelect + value).length;\r\n\r\n  if (this.inputRestrict(inputValue)) this.$emit(\"restrict\", inputValue);\r\n  else apply.bind(this)(...this.inputFormat(inputValue, caretIndex));\r\n};\r\n\r\nfunction set(value) {\r\n  if (typeof value !== \"string\") value = \"\";\r\n  this.insert(value, 0, this.$el.value.length);\r\n};\r\n\r\nfunction backspace(forward) {\r\n  if (typeof forward !== \"boolean\") forward = false;\r\n\r\n  let selectStart = this.$el.selectionStart;\r\n  let selectEnd = this.$el.selectionEnd;\r\n\r\n  let isCaret = selectStart === selectEnd;\r\n  if (forward) selectEnd = selectEnd + (isCaret ? 1 : 0);\r\n  else selectStart = selectStart - (isCaret ? 1 : 0);\r\n\r\n  let beforeSelect = this.$el.value.substring(0, selectStart);\r\n  let afterSelect = this.$el.value.substring(selectEnd);\r\n\r\n  let inputValue = beforeSelect + afterSelect;\r\n  let caretIndex = beforeSelect.length;\r\n  apply.bind(this)(...this.inputFormat(inputValue, caretIndex));\r\n};\r\n\r\nfunction confirm(value) {\r\n  if (typeof value !== \"boolean\") value = false;\r\n  if (this.restore) this.canRestore = value;\r\n}\r\n\n\n//# sourceURL=webpack://VueTextInput/./src/inputMethods.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: install, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"install\", function() { return install; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format */ \"./src/format.js\");\n/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextInput */ \"./src/TextInput.vue\");\n\r\n\r\n\r\n\r\nlet presetTypes = {\r\n  text: {},\r\n  numeric: {\r\n    restrict: value => !/^[0-9]*\\.?[0-9]*$/.test(value),\r\n    format: _format__WEBPACK_IMPORTED_MODULE_1__[\"trimLeadingZeros\"],\r\n    parse: value => Number(value)\r\n  },\r\n  phone: {\r\n    restrict: [\r\n      value => !/^[0-9-]*$/.test(value),\r\n      value => value.replace(/[^0-9]/g, \"\").length > 10\r\n    ],\r\n    format: (value, caretIndex) => {\r\n      [value, caretIndex] = _format__WEBPACK_IMPORTED_MODULE_1__[\"resetNumeric\"](value, caretIndex);\r\n      [value, caretIndex] = _format__WEBPACK_IMPORTED_MODULE_1__[\"insertAt\"](value, caretIndex, 3, \"-\");\r\n      [value, caretIndex] = _format__WEBPACK_IMPORTED_MODULE_1__[\"insertAt\"](value, caretIndex, 7, \"-\");\r\n      return [value, caretIndex];\r\n    },\r\n    parse: value => {\r\n      return value.replace(/[^0-9]/g, \"\");\r\n    }\r\n  },\r\n  boolean: {\r\n    parse: value => [\"true\", \"t\", \"yes\", \"y\"].includes(Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"toLower\"])(value))\r\n  }\r\n};\r\n\r\nlet defaultType = {\r\n  restrict: _ => false,\r\n  validate: value => value.length > 0,\r\n  invalidate: _ => false,\r\n  format: (_, __) => [_, __],\r\n  parse: _ => _,\r\n  stringify: _ => Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"toString\"])(_)\r\n};\r\n\r\nfunction install(Vue) {\r\n  let data = Vue.observable({\r\n    instance: null,\r\n    types: {\r\n      ...Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"forEach\"])(presetTypes, type => Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"defaults\"])(type, defaultType)),\r\n      ...Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"forEach\"])(presetTypes, type => Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"defaults\"])(type, defaultType))\r\n    }\r\n  });\r\n\r\n  let publicData = Vue.observable({\r\n    get isActive() { return !!data.instance; }\r\n  });\r\n\r\n  let addPublicGetter = (name, func, defaultValue) => {\r\n    Object.defineProperty(publicData, name, {\r\n      get: _ => {\r\n        if (!data.instance) return defaultValue;\r\n        return func(data.instance);\r\n      },\r\n      enumerable: true,\r\n      configurable: true\r\n    });\r\n  };\r\n\r\n  let addPublicProperty = (name, value) => {\r\n    Object.defineProperty(publicData, name, {\r\n      value: value,\r\n      writable: true,\r\n      enumerable: true,\r\n      configurable: true\r\n    });\r\n  };\r\n\r\n  addPublicGetter(\"type\", _ => _.type, null);\r\n  addPublicGetter(\"value\", _ => _.inputValue, null);\r\n  addPublicGetter(\"data\", _ => _.dataValue, null);\r\n  addPublicGetter(\"validity\", _ => _.validity, null);\r\n  addPublicProperty(\"block\", _ => false);\r\n\r\n  let undef = _ => undefined;\r\n  addPublicGetter(\"insert\", _ => _.insert, undef);\r\n  addPublicGetter(\"set\", _ => _.set, undef);\r\n  addPublicGetter(\"backspace\", _ => _.backspace, undef);\r\n  addPublicGetter(\"confirm\", _ => _.confirm, undef);\r\n  \r\n  let confirm = _ => publicData.confirm();\r\n  Vue.directive(\"confirm\", {\r\n    bind(el) { el.addEventListener(\"mousedown\", confirm); }\r\n  });\r\n  \r\n  let prevent = _ => _.preventDefault();\r\n  Vue.directive(\"blurry\", {\r\n    bind(el) { el.addEventListener(\"mousedown\", prevent); }\r\n  });\r\n\r\n  _TextInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"].pluginData = data;\r\n  Vue.component(_TextInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"].name, _TextInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n  Vue.prototype.$input = publicData;\r\n};\r\n\r\nlet plugin = { install: install };\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (plugin);\r\n\r\nif (typeof window !== \"undefined\" && window.Vue) {\r\n  window.Vue.use(plugin);\r\n}\r\n\n\n//# sourceURL=webpack://VueTextInput/./src/main.js?");

/***/ }),

/***/ "lodash":
/*!*************************************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash","root":"_"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;\n\n//# sourceURL=webpack://VueTextInput/external_%7B%22commonjs%22:%22lodash%22,%22commonjs2%22:%22lodash%22,%22amd%22:%22lodash%22,%22root%22:%22_%22%7D?");

/***/ })

/******/ });
});