import { mapValues, assign, toString, toLower } from "lodash";
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
  }
};

let defaultType = {
  nvtype: "text",
  restrict: _ => false,
  validate: value => value.length > 0,
  invalidate: _ => false,
  format: (_, __) => [_, __],
  parse: _ => _,
  stringify: _ => toString(_)
};

export function install(Vue, config) {
  if (config === undefined) config = {};
  let assignTypeDefaults = _ => ({ ...defaultType, ..._ });
  let configTypes = config.types ? config.types : {};

  let data = Vue.observable({
    instance: null,
    userTypes: configTypes,
    get types() {
      return {
        ...mapValues(presetTypes, assignTypeDefaults),
        ...mapValues(data.userTypes, assignTypeDefaults)
      };
    }
  });

  let publicData = Vue.observable({
    get isActive() { return !!data.instance; },
    get types() {
      let types = Object.create({
        $create(name, type) {
          Vue.set(data.userTypes, name, type);
        },
        $delete(name) {
          Vue.delete(data.userTypes, name);
        }
      });

      assign(types, data.userTypes);
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

let plugin = { install: install };
export default plugin;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}
