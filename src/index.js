// Written by Aaron Beaudoin at Union College

import { forEach, defaults, toString } from "lodash";
import * as helpers from "./helpers";
import defaultTypes from "./types";
import SmartInput from "./SmartInput";
import RestoreInput from "./RestoreInput";

// Input formatting in this plugin works, but it sucks because you have
// to write your own login for keeping track of the caret position
// and making sure you keep it in the right position as the input changes
// In the future I would like to mimic the behavior of this library:
// https://nosir.github.io/cleave.js/
export function install(Vue, options) {
  Vue.prototype.$input = {};

  let defaultType = {
    restrict: _ => true,
    valid: value => value.length > 0,
    invalid: _ => false,
    format: (_, __) => [_, __],
    parse: _ => _,
    stringify: _ => toString(_)
  };

  let types = {
    text: defaultType,
    ...forEach(defaultTypes, type => defaults(type, defaultType)),
    ...forEach(options, type => defaults(type, defaultType))
  };

  let tracking = Vue.observable({
    active: false,
    type: null,
    value: "",
    validity: null
  });

  Vue.component(RestoreInput.name, RestoreInput);
  Vue.component(SmartInput.name, {
    ...SmartInput, 
    mixins: [{
      beforeCreate() {
        this.types = types;
        this.tracking = tracking;
      }
    }]
  });

  // We need to do custom handling for all keyboard input events in
  // order to validate text BEFORE it is added to an input
  document.addEventListener("keydown", event => {

    // The `smart-input` component adds the `data-smart` attribute
    // to signal that the input element should be treated specially
    if (!event.target.dataset.smart) return;

    // If the length of `event.key` is one, we assume that the key
    // is a printable character like "a", "3", or "?"
    let printable = event.key.length === 1;

    // If a modified key is being held down we want to let the event
    // proceed as usual so keyboard shortcuts don't break
    let modifiers = event.ctrlKey || event.altKey || event.metaKey;

    // Printable character behavior is handled by a custom function
    if (printable && !modifiers) {
      event.preventDefault();
      helpers.insertValue(document.activeElement, types, event.key);
    
    // Backspace behavior is handled by a custom function
    } else if (event.key === "Backspace") {
      event.preventDefault();
      helpers.backspaceValue(document.activeElement, types);
    
    // Tab is blocked to prevent cycling through focusable elements
    // This may need to be done before the element check at the
    // top of the listener but for now we'll see
    } else if (event.key === "Tab") {
      event.preventDefault();
    }
  });

  // In order for on-screen numpads and keyboards to work properly we
  // need to keep their buttons from removing focus from active inputs
  document.addEventListener("mousedown", event => {

    // If the element or any parent above it in the tree has
    // the `.blurry` class then block its regular behavior
    if (event.target.closest(".blurry")) event.preventDefault();
  });

  forEach(tracking, (property, name) => {
    Object.defineProperty(Vue.prototype.$input, name, {
      // Using `property` simply returns the value of the property at the
      // time that `forEach` was called, which is not what we want
      get() { return tracking[name]; },
      enumerable: true,
      configurable: true
    });
  });

  forEach(helpers, (helper, name) => {
    Object.defineProperty(Vue.prototype.$input, name, {
      value: (...args) => {
        let activeInput = document.activeElement;
        if (!activeInput.dataset.smart) return;
        helper(activeInput, types, ...args);
      },
      writable: true,
      enumerable: true,
      configurable: true
    });
  });
};

let plugin = { install: install };
export default plugin;

// let globalVue = null;
// if (typeof window !== "undefined") globalVue = window.Vue;
// else if (typeof global !== "undefined") globalVue = global.Vue;
// if (globalVue) globalVue.use(plugin);
