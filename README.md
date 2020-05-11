# vue-text-input

`vue-text-input` is a Vue plugin for enabling more powerful control over text-based input elements.

- **Simple.** Introduces a single new component `<text-input>`.
- **Stylable.** Wraps a regular `<input>` element, making styling a piece of cake.
- **Reactive**. Input values and behavior use Vue's built-in reactivity system.

Install with `npm install vue-text-input`.

## Additions to Vue Instance

When installed, `vue-text-input` adds the following global features to your Vue instance:

- A `<text-input>` Vue component to use as a replacements for `<input>`.
- A collection of properties and methods accessible at `Vue.prototype.$input`.
- Two Vue directives: `v-confirm` and `v-blurry`.

## Documentation

- [`<text-input>` Component](#text-input-component)
- [`Vue.prototype.$input` Object](#vueprototypeinput-object)
- [`v-confirm` and `v-blurry` Directives](#v-confirm-and-v-blurry-directives)
- [Built-In Text Input Types](#built-in-text-input-types)

## `<text-input>` Component

### Component Props

_Note: A `Predicate` is just a `Function` which returns a `Boolean`._

| Name | Type | Description |
| --- | --- | --- |
| type | _String_ | The type of the text input. Defaults to `"text"`. |
| nvtype | _String?_ | The native type of the text input. This is the value for the `type` attribute of the underlying `<input>` element. Defaults to `null`. |
| restrict | _Predicate?_<br>_Predicate[]_ | Function(s) which run each time the value of the text input is about to be changed. Function(s) take the value the text input would have after said change as a parameter. If **any** function returns `true`, the change is **cancelled.** |
| validate | _Predicate?_<br>_Predicate[]_ | Function(s) which are used to determine the validity of the value of the text input. Function(s) take the value of the text input as a parameter. If **all** functions returns `true`, the value of the text input is considered **valid.** |
| invalidate | _Predicate?_<br>_Predicate[]_ | Function(s) which are used to determine the validity of the value of the text input. Function(s) take the value of the text input as a parameter. If **any** function returns `true`, the value of the text input is considered **invalid.** |
| format | _Function?_ | A function used to format the value of the text input as changes occur. The function runs each time the value of the text input is about to be changed. This function overrides the `format` function associated with the `type` of the text input. |
| parse | _Function?_ | A function used to parse the value of the text input before `"input"` events are emitted to update the data value it is bound to. This function overrides the `parse` function associated with the `type` of the text input. |
| stringify | _Function?_ | A function used to stringify the data value a text input is bound to. This function overrides the `stringify` function associated with the `type` of the text input. |
| value | _Any?_ | A data value to bind to the text input. |
| live | _Boolean_ | Whether or not the the text input should emit `"input"` events to update the data value it is bound to while the text input is focused. Defaults to `true`. |
| tidy | _Boolean_ | Whether or not to **always** update the value of the text input using the data value it is bound to when the text input is blurred. Defaults to `false`. |
| restore | _Boolean_ | Whether or not the value of the text input before it was focused should be restored when the text input is blurred. Defaults to `false`. To prevent the value of the text input from being restored, call the `$input.confirm` function before the text input is blurred. |
| select | _Boolean_ | Whether or not the entire value of the text input should be selected when the text input is focused. Defaults to `false`. |
| clear | _Boolean_ | Whether or not the entire value of the text input should be cleared when the text input is focused. Defaults to `false`. |

## `Vue.prototype.$input` Object

### `$input.types => Object`

An object containing all existing user-defined text input types.

#### `$input.types.$create(name: String, type: Object) => Void`

Creates a user-defined text input type.

#### `$input.types.$delete(name: String) => Void`

Deletes a user-defined text input type.

### `$input.isActive => Boolean`

Whether or not any `<text-input>` instance on the page is focused.

### `$input.type => String`

The name of the type of the active `<text-input>` instance.

### `$input.value => String`

The value of the active `<text-input>` instance.

### `$input.isEmpty => Boolean`

Whether or not the length of the value of the active `<text-input>` instance is zero.

### `$input.data => Any`

Whether or not the length of the value of the active `<text-input>` instance is zero.

### `$input.validity => Boolean | null`

Whether the value of the active `<text-input>` instance is valid, invalid, or neither.

### `$input.block => Predicate`

A function used to selectively block user input across all `<text-input>` instances. The function run each time a `"keydown"` event occurs on a text input. The function takes the `"keydown"` event as a parameter. If the function returns `true`, no character is inserted into the text input.

### `$input.restrict => Predicate`

A function used to selectively restrict user input across all `<text-input>` instances. The function run each time the value of a text input is about to be changed. The function takes the value the text input would have after said change as a parameter. If the function returns `true`, the change is cancelled.

### `$input.onRestrict => Callback`

A function which runs each time the value of any `<text-input>` instance is restricted.

### `$input.insert(value: String, selectStart?: Number, selectEnd?: Number) => Void`

Inserts text into the value of the active `<text-input>` instance. If `selectStart` and `selectEnd` are omitted, the current `selectionStart` and `selectionEnd` values of the `<text-input>` component's inner `<input>` element are used. If no `<text-input>` instance is active, does nothing.

### `$input.set(value: String) => Void` 
Sets the value of the active `<text-input>` instance. This is equivalent to calling `$input.insert` with `selectStart` set to `0` and `selectEnd` set to the length of the `<text-input>` instance's current value. If no `<text-input>` instance is active, does nothing.

### `$input.backspace(forward?: Boolean) => Void` 
Modifies the value of the active `<text-input>` component as if the `backspace` key were pressed. If `forward` is `true`, the value is instead modified as if the `delete` key were pressed. If no `<text-input>` instance is active, does nothing.

### `$input.confirm(value?: Boolean) => Void`
If the `restore` prop of the active `<text-input>` instance is `true`, signals the text input not to restore its value the next time it is blurred to the value it had before it was focused.

## `v-confirm` and `v-blurry` Directives

### `v-confirm`

When added to an element, causes `mousedown` events on that element to run `$input.confirm(true)`. This prevents the value of the active `<text-input>` instance from being restored when the element is clicked.

### `v-blurry`

When added to an element, prevent the default behavior of `mousedown` events on that element. This allows the element to be clicked without causing the active `<text-input>` instance to be blurred.

## Built-In Text Input Types

### `text`

The `text` input type has no special functionality associated with it.

```js
// These are the default values for all text input type properties.
// The `text` input type simply inherits these defaults.
{
  nvtype: "text",
  restrict: value => false,
  validate: value => value.length > 0,
  invalidate: value => false,
  format: (value, caretIndex) => [value, caretIndex],
  parse: value => value,
  stringify: value => lodash.toString(value)
}
```

### `numeric`

The `numeric` input type is specialized for numeric values.

```js
{
  // Input values not matching the following regex will be restricted
  restrict: value => !/^[0-9]*\.?[0-9]*$/.test(value),

  // Trims leading zeros from incoming text
  format: (value, caretIndex) => {
    if (value.length < 2) return [value, caretIndex];
    else if (value[0] === "0" && value[1] !== ".") value = value.slice(1);
    return [value, caretIndex];
  },

  // Text input value is parsed using the default JavaScript `Number` object
  parse: value => Number(value)
}
```

### `phone`

The `phone` input type is specialized for phone numbers. It serves a lightweight demonstration of what you can do by creating custom text input types.

```js
{
  // Input values are restricted using two separate predicates
  restrict: [
    // Input value must be composed of numbers and dashes
    value => !/^[0-9-]*$/.test(value),
    // Input value should have no more than 10 digits
    value => value.replace(/[^0-9]/g, "").length > 10
  ],

  // Automatically add dashes if not done manually
  format: (value, caretIndex) => {
    [value, caretIndex] = format.resetNumeric(value, caretIndex);
    [value, caretIndex] = format.insertAt(value, caretIndex, 3, "-");
    [value, caretIndex] = format.insertAt(value, caretIndex, 7, "-");
    return [value, caretIndex];
  },

  // Data values consists only of digits
  parse: value => {
    return value.replace(/[^0-9]/g, "");
  }
}
```

## Why no input history? (Undo/Redo Behavior)

Unfortunately, there is no adequate cross-platform way to use the **native** undo/redo stack for an input if it is being modified programatically. This is a problem because some features of the `<text-input>` component depend completely on being able to programatically modify the input element.

Browsers do provide the `document.execCommand` function which can be used with the `insertText` command to insert text into an **active** area of the document. This is the only way that text can be added to the document programatically which works with the native undo/redo stack. However, this method of inserting text has several critical limitations.

1. Since the function works simply on whatever is currently active, an input must be focused to be modified.
2. The input formatting implementation that `vue-text-input` uses sets the entire value of an input whenever it needs to be updated. This is _possible_ with `document.execCommand` by selecting the entire value of the input before each insert, but this results in the whole value being selected after each undo.
3. `document.execCommand` has issues in FireFox and can have inconsistent behavior across browsers.

For these reasons, the native undo/redo stack is currently unsupported in `vue-text-input`. However, I am considering implementing a custom alternative input history solution in the future allowing undo/redo to still be possible everywhere except for in the native context menu.

## Author Information

Designed and implemented by Aaron Beaudoin  
Written while working as a student at Union College, NE
