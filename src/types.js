// Written by Aaron Beaudoin at Union College

import toUpper from "lodash/toUpper";

function stripLeadingZeros(value, caretIndex) {
  return [value.replace(/^0+([0-9]\.?)/, "$1"), caretIndex];
}

export default {
  number: {
    restrict: value => /^[0-9]*\.?[0-9]*$/.test(value),
    format: stripLeadingZeros,
    parse: value => Number(value)
  },
  boolean: {
    parse: value => ["true", "t", "yes", "y"].includes(toUpper(value))
  }
};
