export function resetNumeric(value, caretIndex) {
  let caretDecrement = 0;
  value = value.replace(/[^0-9]/g, (_, index) => {
    if (caretIndex > index) caretDecrement += 1;
    return "";
  });

  let pair = [value, caretIndex - caretDecrement];
  return pair;
}

export function insertAt(value, caretIndex, index, character) {
  if (value.length > index && value[index] !== character) {
    value = value.slice(0, index) + character + value.slice(index);
    if (caretIndex > index) caretIndex += 1;
  }

  let pair = [value, caretIndex];
  return pair;
}

export function trimLeadingZeros(value, caretIndex) {
  if (value.length < 2) return [value, caretIndex];
  else if (value[0] === "0" && value[1] !== ".") value = value.slice(1);

  let pair = [value, caretIndex];
  return pair;
}
