(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["VueTextInput"] = factory(require("lodash"));
	else
		root["VueTextInput"] = factory(root["_"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var inputBehaviors_namespaceObject = {};
__webpack_require__.r(inputBehaviors_namespaceObject);
__webpack_require__.d(inputBehaviors_namespaceObject, "inputRestrict", function() { return inputRestrict; });
__webpack_require__.d(inputBehaviors_namespaceObject, "inputValidate", function() { return inputValidate; });
__webpack_require__.d(inputBehaviors_namespaceObject, "inputInvalidate", function() { return inputInvalidate; });
__webpack_require__.d(inputBehaviors_namespaceObject, "inputFormat", function() { return inputFormat; });
__webpack_require__.d(inputBehaviors_namespaceObject, "inputParse", function() { return inputParse; });
__webpack_require__.d(inputBehaviors_namespaceObject, "inputStringify", function() { return inputStringify; });
var inputListeners_namespaceObject = {};
__webpack_require__.r(inputListeners_namespaceObject);
__webpack_require__.d(inputListeners_namespaceObject, "keydownListener", function() { return keydownListener; });
__webpack_require__.d(inputListeners_namespaceObject, "pasteListener", function() { return pasteListener; });
__webpack_require__.d(inputListeners_namespaceObject, "selectListener", function() { return selectListener; });
__webpack_require__.d(inputListeners_namespaceObject, "clearListener", function() { return clearListener; });
var inputMethods_namespaceObject = {};
__webpack_require__.r(inputMethods_namespaceObject);
__webpack_require__.d(inputMethods_namespaceObject, "insert", function() { return insert; });
__webpack_require__.d(inputMethods_namespaceObject, "set", function() { return set; });
__webpack_require__.d(inputMethods_namespaceObject, "backspace", function() { return backspace; });
__webpack_require__.d(inputMethods_namespaceObject, "confirm", function() { return inputMethods_confirm; });

// EXTERNAL MODULE: external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash","root":"_"}
var external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/format.js
function resetNumeric(value, caretIndex) {
  let caretDecrement = 0;
  value = value.replace(/[^0-9]/g, (_, index) => {
    if (caretIndex > index) caretDecrement += 1;
    return "";
  });

  let pair = [value, caretIndex - caretDecrement];
  return pair;
}

function insertAt(value, caretIndex, index, character) {
  if (value.length > index && value[index] !== character) {
    value = value.slice(0, index) + character + value.slice(index);
    if (caretIndex > index) caretIndex += 1;
  }

  let pair = [value, caretIndex];
  return pair;
}

function trimLeadingZeros(value, caretIndex) {
  if (value.length < 2) return [value, caretIndex];
  else if (value[0] === "0" && value[1] !== ".") value = value.slice(1);

  let pair = [value, caretIndex];
  return pair;
}

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/TextInput.vue?vue&type=template&id=28d73718&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "input",
    _vm._g(
      _vm._b(
        {
          attrs: { type: _vm.nvtype },
          on: {
            input: _vm.handleInput,
            focus: _vm.handleFocus,
            blur: _vm.handleBlur
          }
        },
        "input",
        _vm.$attrs,
        false
      ),
      _vm.listeners
    )
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/TextInput.vue?vue&type=template&id=28d73718&

// CONCATENATED MODULE: ./src/inputBehaviors.js


function overwriteTypeFuncArray(name, logicalAnd) {
  return function() {
    let defaultValue = this.typeConfig[name];
    if (Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["isArray"])(defaultValue)) {
      if (logicalAnd) defaultValue = Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["overEvery"])(defaultValue);
      else defaultValue = Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["overSome"])(defaultValue);
    }

    let overwriteValue = this[name];
    if (Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["isArray"])(overwriteValue)) {
      if (logicalAnd) overwriteValue = Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["overEvery"])(overwriteValue);
      else overwriteValue = Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["overSome"])(overwriteValue);
    }

    if (overwriteValue === null) return defaultValue;
    if (logicalAnd) return _ => defaultValue(_) && overwriteValue(_);
    else return _ => defaultValue(_) || overwriteValue(_);
  };
}

function overwriteTypeFunc(name) {
  return function() {
    let defaultFunc = this.typeConfig[name];
    return this[name] === null ? defaultFunc : this[name];
  };
}

let inputRestrict = overwriteTypeFuncArray("restrict");
let inputValidate = overwriteTypeFuncArray("validate", true);
let inputInvalidate = overwriteTypeFuncArray("invalidate");

let inputFormat = overwriteTypeFunc("format");
let inputParse = overwriteTypeFunc("parse");
let inputStringify = overwriteTypeFunc("stringify");

// CONCATENATED MODULE: ./src/inputListeners.js
function keydownListener(event) {
  if (this.$input.block(event)) return event.preventDefault();
  let modifiers = event.ctrlKey || event.altKey || event.metaKey;

  if (event.key.length === 1 && !modifiers) this.insert(event.key);
  else if (event.key === "Backspace") this.backspace();
  else if (event.key === "Delete") this.backspace(true);
  else return;
  event.preventDefault();
}

function pasteListener(event) {
  event.preventDefault();
  this.insert(event.clipboardData.getData("text"));
}

function selectListener(event) {
  this.$el.addEventListener("mouseup", function listener(event) {
    event.target.selectionStart = 0;
    event.target.selectionEnd = event.target.value.length;
    event.target.removeEventListener("mouseup", listener);
  });
}

function clearListener(event) {
  this.$el.value = this.inputValue = "";
}

// CONCATENATED MODULE: ./src/inputMethods.js
function apply(value, caretIndex) {
  if (caretIndex === undefined) caretIndex = value.length;

  this.$el.value = value;
  this.$el.selectionStart = caretIndex;
  this.$el.selectionEnd = caretIndex;
  this.$el.dispatchEvent(new Event("input"));
}

function insert(value, selectStart, selectEnd) {
  if (selectStart === undefined) selectStart = this.$el.selectionStart;
  if (selectEnd === undefined) selectEnd = this.$el.selectionEnd;
  
  let beforeSelect = this.$el.value.substring(0, selectStart);
  let afterSelect = this.$el.value.substring(selectEnd);

  let inputValue = beforeSelect + value + afterSelect;
  let caretIndex = (beforeSelect + value).length;

  let restrict = _ => this.$input.restrict(_) || this.inputRestrict(_);
  if (restrict(inputValue)) this.handleRestrict(inputValue);
  else apply.bind(this)(...this.inputFormat(inputValue, caretIndex));
}

function set(value) {
  if (typeof value !== "string") value = "";
  this.insert(value, 0, this.$el.value.length);
}

function backspace(forward) {
  if (typeof forward !== "boolean") forward = false;

  let selectStart = this.$el.selectionStart;
  let selectEnd = this.$el.selectionEnd;

  let isCaret = selectStart === selectEnd;
  if (forward) selectEnd = selectEnd + (isCaret ? 1 : 0);
  else selectStart = selectStart - (isCaret ? 1 : 0);

  let beforeSelect = this.$el.value.substring(0, selectStart);
  let afterSelect = this.$el.value.substring(selectEnd);

  let inputValue = beforeSelect + afterSelect;
  let caretIndex = beforeSelect.length;
  apply.bind(this)(...this.inputFormat(inputValue, caretIndex));
}

function inputMethods_confirm(value) {
  if (typeof value !== "boolean") value = false;
  if (this.restore) this.canRestore = value;
}

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/TextInput.vue?vue&type=script&lang=js&
//
//
//
//
//





/* harmony default export */ var TextInputvue_type_script_lang_js_ = ({
  name: "text-input",
  mixins: [
    // If the `computed` or `methods` properties are directly set to
    // `Module` objects, Vue will issue an "Invalid value" warning
    { computed: { ...inputBehaviors_namespaceObject } },
    { methods: { ...inputListeners_namespaceObject } },
    { methods: { ...inputMethods_namespaceObject } }
  ],
  props: {
    type: { type: String, default: "text" },
    nvtype: { type: String, default: "text" },
    restrict: { type: [Function, Array], default: null },
    validate: { type: [Function, Array], default: null },
    invalidate: { type: [Function, Array], default: null },
    format: { type: Function, default: null },
    parse: { type: Function, default: null },
    stringify: { type: Function, default: null },
    value: { default: null },
    live: { type: Boolean, default: true },
    tidy: { type: Boolean, default: false },
    restore: { type: Boolean, default: false },
    select: { type: Boolean, default: false },
    clear: { type: Boolean, default: false }
  },
  data() {
    return {
      inputValue: null,
      dataValue: null,
      restoreValue: null,
      canRestore: true
    };
  },
  computed: {
    listeners() {
      let { input, focus, blur, ...listeners } = this.$listeners;
      return listeners;
    },
    isActive() {
      return this.$options.pluginData.instance === this;
    },
    isEmpty() {
      return this.inputValue.length === 0;
    },
    typeConfig() {
      let types = this.$options.pluginData.types;
      return this.type in types ? types[this.type] : types["text"];
    },
    validity() {
      if (this.inputValue === null) return null;
      
      let isValid = this.inputValidate(this.inputValue);
      let isInvalid = this.inputInvalidate(this.inputValue);
      return isInvalid ? false : isValid ? true : null;
    }
  },
  mounted() {
    this.dataValue = this.value;
    this.updateValue(this.dataValue);

    this.$el.addEventListener("keydown", this.keydownListener);
    this.$el.addEventListener("paste", this.pasteListener);
    if (this.select) this.$el.addEventListener("focus", this.selectListener);
    if (this.clear) this.$el.addEventListener("focus", this.clearListener);
  },
  methods: {
    updateValue(value) {
      this.inputValue = this.inputFormat(this.inputStringify(value))[0];
      this.$el.value = this.inputValue;
    },
    handleInput() {
      this.inputValue = this.$el.value;
      if (this.live) {
        this.dataValue = this.inputParse(this.$el.value);
        this.$emit("input", this.dataValue);
      }
    },
    handleFocus() {
      if (this.restore) this.restoreValue = this.dataValue;
      
      this.$options.pluginData.instance = this;
      this.$emit("focus", this);
    },
    handleBlur() {
      if (this.restore && this.canRestore) {
        this.dataValue = this.restoreValue;
        this.$emit("input", this.dataValue);
      } else if (!this.live) {
        this.dataValue = this.inputParse(this.inputValue);
        this.$emit("input", this.dataValue);
      }

      if (this.tidy) this.updateValue(this.dataValue);
      if (this.restore && !this.canRestore) this.canRestore = true;

      this.$options.pluginData.instance = null;
      this.$emit("blur", this);
    },
    handleRestrict(value) {
      this.$input.onRestrict(value);
      this.$emit("restrict", value);
    }
  },
  watch: {
    value(value) {
      this.dataValue = value;
      if (!this.isActive) this.updateValue(this.dataValue);
    },
    validity(value) {
      this.$emit("validity", value);
    }
  }
});

// CONCATENATED MODULE: ./src/TextInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_TextInputvue_type_script_lang_js_ = (TextInputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
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
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/TextInput.vue





/* normalize component */

var component = normalizeComponent(
  src_TextInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/TextInput.vue"
/* harmony default export */ var TextInput = (component.exports);
// CONCATENATED MODULE: ./src/main.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });




let presetTypes = {
  text: {},
  numeric: {
    restrict: value => !/^[0-9]*\.?[0-9]*$/.test(value),
    format: trimLeadingZeros,
    parse: value => Number(value)
  },
  phone: {
    restrict: [
      value => !/^[0-9-]*$/.test(value),
      value => value.replace(/[^0-9]/g, "").length > 10
    ],
    format: (value, caretIndex) => {
      [value, caretIndex] = resetNumeric(value, caretIndex);
      [value, caretIndex] = insertAt(value, caretIndex, 3, "-");
      [value, caretIndex] = insertAt(value, caretIndex, 7, "-");
      return [value, caretIndex];
    },
    parse: value => {
      return value.replace(/[^0-9]/g, "");
    }
  },
  boolean: {
    parse: value => ["true", "t", "yes", "y"].includes(Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["toLower"])(value))
  }
};

let defaultType = {
  restrict: _ => false,
  validate: value => value.length > 0,
  invalidate: _ => false,
  format: (_, __) => [_, __],
  parse: _ => _,
  stringify: _ => Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["toString"])(_)
};

function install(Vue, config) {
  if (config === undefined) config = {};
  let assignTypeDefaults = _ => Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["defaults"])(_, defaultType);
  let configTypes = config.types ? config.types : {};
  
  let data = Vue.observable({
    instance: null,
    presetTypes: Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["forEach"])(presetTypes, assignTypeDefaults),
    dynamicTypes: Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["forEach"])(configTypes, assignTypeDefaults),
    get types() { return { ...data.presetTypes, ...data.dynamicTypes }; }
  });

  let publicData = Vue.observable({
    get isActive() { return !!data.instance; },
    get types() {
      let types = Object.create({
        set(name, type) {
          assignTypeDefaults(type);
          Vue.set(data.dynamicTypes, name, type);
        },
        delete(name) {
          Vue.delete(data.dynamicTypes, name);
        }
      });

      Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["assign"])(types, data.dynamicTypes);
      return Object.freeze(types);
    }
  });

  let addPublicGetter = (name, func, defaultValue) => {
    Object.defineProperty(publicData, name, {
      get: _ => {
        if (!data.instance) return defaultValue;
        return func(data.instance);
      },
      enumerable: true,
      configurable: true
    });
  };

  let addPublicProperty = (name, value) => {
    Object.defineProperty(publicData, name, {
      value: value,
      writable: true,
      enumerable: true,
      configurable: true
    });
  };

  addPublicGetter("type", _ => _.type, null);
  addPublicGetter("value", _ => _.inputValue, null);
  addPublicGetter("isEmpty", _ => _.isEmpty, true);
  addPublicGetter("data", _ => _.dataValue, null);
  addPublicGetter("validity", _ => _.validity, null);

  addPublicProperty("block", _ => false);
  addPublicProperty("restrict", _ => false);
  addPublicProperty("onRestrict", _ => undefined);

  if (config.block) publicData.block = config.block;
  if (config.restrict) publicData.restrict = config.restrict;
  if (config.onRestrict) publicData.onRestrict = config.onRestrict;

  let undef = _ => undefined;
  addPublicGetter("insert", _ => _.insert, undef);
  addPublicGetter("set", _ => _.set, undef);
  addPublicGetter("backspace", _ => _.backspace, undef);
  addPublicGetter("confirm", _ => _.confirm, undef);
  
  let confirm = _ => publicData.confirm();
  Vue.directive("confirm", {
    bind(el) { el.addEventListener("mousedown", confirm); }
  });
  
  let prevent = _ => _.preventDefault();
  Vue.directive("blurry", {
    bind(el) { el.addEventListener("mousedown", prevent); }
  });

  TextInput.pluginData = data;
  Vue.component(TextInput.name, TextInput);
  Vue.prototype.$input = publicData;
};

let main_plugin = { install: install };
/* harmony default export */ var main = __webpack_exports__["default"] = (main_plugin);

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(main_plugin);
}


/***/ })
/******/ ]);
});