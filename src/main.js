import { forEach, assign, clone, defaults, toString, toLower } from "lodash";
import * as format from "./format";
import TextInput from "./TextInput";

let presetTypes = {
  text: {},
  numeric: {
    restrict: value => !/^[0-9]*\.?[0-9]*$/.test(value),
    format: format.trimLeadingZeros,
    parse: value => Number(value)
  },
  phone: {
    restrict: [
      value => !/^[0-9-]*$/.test(value),
      value => value.replace(/[^0-9]/g, "").length > 10
    ],
    format: (value, caretIndex) => {
      [value, caretIndex] = format.resetNumeric(value, caretIndex);
      [value, caretIndex] = format.insertAt(value, caretIndex, 3, "-");
      [value, caretIndex] = format.insertAt(value, caretIndex, 7, "-");
      return [value, caretIndex];
    },
    parse: value => {
      return value.replace(/[^0-9]/g, "");
    }
  },
  boolean: {
    parse: value => ["true", "t", "yes", "y"].includes(toLower(value))
  }
};

let defaultType = {
  restrict: _ => false,
  validate: value => value.length > 0,
  invalidate: _ => false,
  format: (_, __) => [_, __],
  parse: _ => _,
  stringify: _ => toString(_)
};

export function install(Vue, configTypes) {
  let assignTypeDefaults = _ => defaults(_, defaultType);
  if (configTypes === undefined) configTypes = {};
  
  let data = Vue.observable({
    instance: null,
    presetTypes: forEach(presetTypes, assignTypeDefaults),
    configTypes: forEach(configTypes, assignTypeDefaults),
    dynamicTypes: {},
    get types() {
      return {
        ...data.presetTypes,
        ...data.configTypes,
        ...data.dynamicTypes
      };
    }
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

      assign(types, data.dynamicTypes);
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
  addPublicGetter("data", _ => _.dataValue, null);
  addPublicGetter("validity", _ => _.validity, null);
  addPublicProperty("block", _ => false);

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

let plugin = { install: install };
export default plugin;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}
