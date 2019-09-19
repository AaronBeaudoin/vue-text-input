function apply(value, caretIndex) {
  if (caretIndex === undefined) caretIndex = value.length;

  this.$el.value = value;
  this.$el.selectionStart = caretIndex;
  this.$el.selectionEnd = caretIndex;
  this.$el.dispatchEvent(new Event("input"));
}

export function insert(value, selectStart, selectEnd) {
  if (selectStart === undefined) selectStart = this.$el.selectionStart;
  if (selectEnd === undefined) selectEnd = this.$el.selectionEnd;
  
  let beforeSelect = this.$el.value.substring(0, selectStart);
  let afterSelect = this.$el.value.substring(selectEnd);

  let inputValue = beforeSelect + value + afterSelect;
  let caretIndex = (beforeSelect + value).length;

  if (this.inputRestrict(inputValue)) this.$emit("restrict", inputValue);
  else apply.bind(this)(...this.inputFormat(inputValue, caretIndex));
};

export function set(value) {
  if (typeof value !== "string") value = "";
  this.insert(value, 0, this.$el.value.length);
};

export function backspace(forward) {
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
};

export function confirm(value) {
  if (typeof value !== "boolean") value = false;
  if (this.restore) this.canRestore = value;
}
