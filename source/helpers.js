import { defaultTo } from "lodash";

function getTypeConfig(element, types) {
  return defaultTo(types[element.dataset.smart], types["text"]);
}

function applyValue(element, value, caretIndex) {
  if (caretIndex === undefined) caretIndex = value.length;

  element.value = value;
  element.selectionStart = caretIndex;
  element.selectionEnd = caretIndex;
  element.dispatchEvent(new Event("input"));
}

export function setValue(element, types, value, caretIndex) {
  let config = getTypeConfig(element, types);
  if (!config.restrict(value)) return;
  applyValue(element, ...config.format(value, caretIndex));
}

export function clearValue(element, types) {
  let config = getTypeConfig(element, types);
  applyValue(element, ...config.format("", 0));
}

// Input validation must be performed at this step (before the input
// value is actually set) and not in the component to prevent the
// incorrect value from briefly appearing on-screen; Input formatting
// must be done here for a similar reason (to manage the caret properly)
// A data attribute MUST be used to detect the type of the input because
// there is no way to reference its Vue component directly other than
// element.__vue__, which can apparently have issues if the page
// has more than one instance of Vue created on it
export function insertValue(element, types, value) {
  let beforeSelect = element.value.substring(0, element.selectionStart);
  let afterSelect = element.value.substring(element.selectionEnd);
  
  let inputValue = beforeSelect + value + afterSelect;
  let caretIndex = (beforeSelect + value).length;

  let config = getTypeConfig(element, types);
  if (!config.restrict(inputValue)) return;
  applyValue(element, ...config.format(inputValue, caretIndex));
}

export function backspaceValue(element, types) {
  let hasSelection = element.selectionEnd !== element.selectionStart;
  let selectionStart = element.selectionStart - (hasSelection ? 0 : 1);
  let beforeSelect = element.value.substring(0, selectionStart);
  let afterSelect = element.value.substring(element.selectionEnd);
  
  let inputValue = beforeSelect + afterSelect;
  let caretIndex = beforeSelect.length;

  let config = getTypeConfig(element, types);
  applyValue(element, ...config.format(inputValue, caretIndex));
}

export function confirmValue(element) {
  if ("restore" in element.dataset) element.dataset.restore = "false";
}
