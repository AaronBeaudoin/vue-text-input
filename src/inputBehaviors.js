import { overEvery, overSome, isArray } from "lodash";

function overwriteConfigFuncArray(name, logicalAnd) {
  return function() {
    let defaultValue = this.inputConfig[name];
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

function overwriteConfigFunc(name) {
  return function() {
    let defaultFunc = this.inputConfig[name];
    return this[name] === null ? defaultFunc : this[name];
  };
}

export let inputRestrict = overwriteConfigFuncArray("restrict");
export let inputValidate = overwriteConfigFuncArray("validate", true);
export let inputInvalidate = overwriteConfigFuncArray("invalidate");

export let inputFormat = overwriteConfigFunc("format");
export let inputParse = overwriteConfigFunc("parse");
export let inputStringify = overwriteConfigFunc("stringify");
