# vue-text-input

`vue-text-input` is a Vue plugin for enabling more powerful control over text-based input elements.

- **Simple.** Introduces a single new component `<text-input>`.
- **Stylable.** Wraps a regular `<input>` element, making styling a piece of cake.
- **Reactive**. Input behavior can be modified on the fly.

Install with `npm install vue-text-input`.

## Additions to Vue Instance

When installed, `vue-text-input` adds the following global features to your Vue instance:

- A `<text-input>` Vue component to use as a replacements for `<input>`.
- A collection of properties and methods accessible at `Vue.prototype.$input`.
- Two Vue directives: `v-confirm` and `v-blurry`.

## Documentation

- [`<text-input>` Component](#text-input-component)
- [Global Properties](#global-properties)
- [Global Methods](#global-methods)
- [Directives](#directives)

## \<text-input\> Component

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

## Vue.prototype.$input



## Global Properties

### $input.**isActive** - _Boolean_
### $input.**type** - _String_
### $input.**value** - _String_
### $input.**data** - _Any_
### $input.**validity** - _Boolean | null_
### $input.**block** - _Function_

__`$input.isActive: Boolean`__  
Whether or not any `<text-input>` component on the page is focused.

__`$input.type: String`__  
The type of the active `<text-input>` component.

__`$input.value: String`__  
The text value of the active `<text-input>` component.

__`$input.data: Any`__  
The value of the `value` prop of the active `<text-input>` component. If `v-model` is used on the component then this will be the value of the data it is bound to.

__`$input.validity: Boolean | null`__  
The validity of the value of the active `<text-input>` component. Returns `true` if the value is valid, `false` of the value is invalid, or `null` if the value is neither valid or invalid.

__`$input.block: (event: Event) => Boolean`__  
A function which is run before every `keydown` event on a `<text-input>` component to determine whether or not the event should be ignored. This is useful in cases where keyboard input needs to be conditionally disabled entirely.

## Global Methods

### $input.**insert**(value: String, [selectStart: Number, selectEnd: Number])
### $input.**set**(value: String)
### $input.**backspace**(forward: Boolean)
### $input.**confirm**(value: Boolean)

__`$input.insert(value: String, selectStart?: Number, selectEnd?: Number)`__  
If `isActive` is `true`, inserts `value` into the value of the active `<text-input>` component. If `selectStart` and `selectEnd` are omitted, the current `selectionStart` and `selectionEnd` values of the `<text-input>` component's inner `<input>` element are used.

__`$input.set(value: String)`__  
If `isActive` is `true`, sets the value of the active `<text-input>` component. This is equivalent to calling `$input.insert` with `selectStart` set to `0` and `selectEnd` set to the length of the `<text-input>` component's current value.

__`$input.backspace(forward?: Boolean)`__  
If `isActive` is `true`, modifies the value of the active `<text-input>` component as if the `backspace` key were pressed. If `forward` is `true`, the value is instead modified as if the `delete` key were pressed.

__`$input.confirm(value?: Boolean)`__  
If `isActive` is `true` and the active `<text-input>` component's `restore` prop is also `true`, signals the component not to reset its input value when it is next blurred to the value from before it was last focused.

## Directives

### **v-confirm**

When added to an element, causes `mousedown` events on that element to trigger `$input.confirm`.

### **v-blurry**

When added to an element, prevent the default behavior of `mousedown` events on that element. This allows the element to be clicked without blurring the active `<text-input>` component.

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
