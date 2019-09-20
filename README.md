# vue-text-input

`vue-text-input` is a Vue plugin which gives you much more control over the behavior of text-based input elements. You can set functions for validation and react to the current validity of the input, set functions which restrict what can be typed into the input altogether and react whenever this function restricts an input value, set functions for converting the text in the input to and from a different type, apply formatting to the input value as the user types, and more.

This plugin does four things when installed:
- Registers a global `<text-input>` component
- Exposes some global properties and methods at `Vue.prototype.$input`
- Registers a global `v-confirm` directive
- Registers a global `v-blurry` directive

## Documentation

- [Standard Component Props](#standard-component-props)
- [Type Extension Props](#type-extension-props)
- [Global Properties](#global-properties)
- [Global Methods](#global-methods)
- [Directives](#directives)

## Standard Component Props

### **type** - _String_

The type of the text input. Defaults to `"text"`.

### **value** - _Any_

A data value to bind the text input to. Defaults to `null`.

### **restore** - _Boolean_

When set to `true`, causes the text input to save its current value whenever the input is focused and then restore that value whenever the input is blurred, unless `$input.confirm` is called before the input is blurred. Defaults to `false`.

### **live** - _Boolean_

When set to `false`, prevents the text input from syncing its value with the bound data value while the input is focused. Defaults to `true`.

### **select** - _Boolean_

When set to `true`, causes the contents of the text input to be selected whenever the input is focused. Defaults to `false`.

### **clear** - _Boolean_

When set to `true`, causes the contents of the text input to be cleared whenever the input is focused. Defaults to `false`.

## Type Extension Props

Type extension props allows the behavior associated with the text input's current type to be extended or overridden. This allows the behavior of the text input to change dynamically in response to reactive data.

### **restrict** - _Function | Array | null_

Allows the `restrict` property of the selected text input type to be extended dynamically to include additional restrictions. Defaults to `null`.

### **validate** - _Function | Array | null_

Allows the `validate` property of the selected text input type to be extended dynamically to include additional validations. Defaults to `null`.

### **invalidate** - _Function | Array | null_

Allows the `invalidate` property of the selected text input type to be extended dynamically to include additional invalidations. Defaults to `null`.

### **format** - _Function | null_

Allows the `format` property of the selected text input type to be overridden. Defaults to `null`.

### **parse** - _Function | null_

Allows the `parse` property of the selected text input type to be overridden. Defaults to `null`.

### **stringify** - _Function | null_

Allows the `stringify` property of the selected text input type to be overridden. Defaults to `null`.

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

## Input History Caveats

Unfortunately, there is no adequate cross-platform way to use the native undo/redo stack for an input if it is being modified programatically. This is a problem because `<text-input>` always has to update its value programatically in order to provide the functionality that it does.

Browsers do provide the `document.execCommand` function which can be used with the `insertText` command to insert text into an active area of the document. This is the only way that text can be added to the document programatically which works with the native undo/redo stack. However, this method of inserting text has several critical issues.

1. The input must be focused, making this function insufficient for reacting to data changes.
2. The function is only for inserting text into the input, not for setting the entire value of the input. To set the entire value, the input's `selectionStart` and `selectionEnd` properties must still be set to the `0` and `element.value.length` respectively before running `document.execCommand`.
3. The input formatting implementation that `vue-text-input` uses relies on always being able to set the entire value of an input. Therefore, the process just described in (2) would have to be done each time the input in updated, resulting in the entire value of the input being selected after each undo. This is a bad user experience and means that using `document.execCommand` is fundamentally incompatible with live input formatting.
4. `document.execCommand` has issues in FireFox.

For this reason, I have chosen not to support the native undo/redo stack in `vue-text-input`. An custom alternative undo/redo history solution will be implemented in the future.

## Author Information

Designed and implemented by Aaron Beaudoin  
Written while working as a student at Union College, NE
