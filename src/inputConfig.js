import { overEvery, overSome, isArray } from "lodash";

function overwriteTypeFuncArray(name, logicalAnd) {
  return function() {
    let defaultValue = this.typeConfig[name];
    if (isArray(defaultValue)) {
      if (logicalAnd) defaultValue = overEvery(defaultValue);
      else defaultValue = overSome(defaultValue);
    }

    let overwriteValue = this[name];
    if (isArray(overwriteValue)) {
      if (logicalAnd) overwriteValue = overEvery(overwriteValue);
      else overwriteValue = overSome(overwriteValue);
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

export let inputRestrict = overwriteTypeFuncArray("restrict");
export let inputValidate = overwriteTypeFuncArray("validate", true);
export let inputInvalidate = overwriteTypeFuncArray("invalidate");

export let inputFormat = overwriteTypeFunc("format");
export let inputParse = overwriteTypeFunc("parse");
export let inputStringify = overwriteTypeFunc("stringify");
