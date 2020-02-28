export function keydownListener(event) {
  let modifiers = event.ctrlKey || event.altKey || event.metaKey;

  if (event.key.length === 1 && !modifiers) {
    if (!this.$input.block(event)) this.insert(event.key);
  }
  else if (event.key === "Backspace") this.backspace();
  else if (event.key === "Delete") this.backspace(true);
  else return;
  event.preventDefault();
}

export function pasteListener(event) {
  event.preventDefault();
  this.insert(event.clipboardData.getData("text"));
}

export function selectListener(event) {
  this.$el.addEventListener("mouseup", function listener(event) {
    event.target.selectionStart = 0;
    event.target.selectionEnd = event.target.value.length;
    event.target.removeEventListener("mouseup", listener);
  });
}

export function clearListener(event) {
  this.$el.value = this.inputValue = "";
}
