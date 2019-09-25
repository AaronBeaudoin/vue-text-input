# vue-text-input

`vue-text-input` is a Vue plugin which gives you much more control over the behavior of text-based input elements. Everything in `vue-text-input` is built with Vue's reactivity system in mind so you can easily modify the behavior of a text input on the fly.

Installing `vue-text-input` gives you the `<text-input>` component along with a few tools which make using it a piece of cake. This component is just a wrapper around a regular `<input>` element, so you can style it just like you would a normal input. However, using `<text-input>` allows us to plug the behavior and state of the input into our application in a reactive and accessible way.

The most important prop you can pass to a `<text-input>` component instance is the `type` prop.

## Features

In `vue-text-

- Restrict what can be typed into an input using a function
- Mark an input as valid, invalid, or neither using a combination of two functions
- Format the text in an input as new text in inserted
- Choose how text in an input is parsed into data when used with `v-model`
- Choose how data connected to an input is stringified into text
- Programatically manipulate or watch for changes in the currently focused text input from anywhere in an application
- Add special behavior to an input

You can set functions for validation and react to the current validity of the input, set functions which restrict what can be typed into the input altogether and react whenever this function restricts an input value, set functions for converting the text in the input to and from a different type, apply formatting to the input value as the user types, and more.

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

## Why no input history? (Undo/Redo Behavior)

Unfortunately, there is no adequate cross-platform way to use the **native** undo/redo stack for an input if it is being modified programatically. This is a problem because some features of the `<text-input>` component depend completely on being able to programatically modify the input element.

Browsers do provide the `document.execCommand` function which can be used with the `insertText` command to insert text into an **active** area of the document. This is the only way that text can be added to the document programatically which works with the native undo/redo stack. However, this method of inserting text has several critical limitations.

1. Since the function works simply on whatever is currently active, an input must be focused to be modified.
2. The input formatting implementation that `vue-text-input` uses sets the entire value of an input whenever it needs to be updated. This is _possible_ with `document.execCommand` by selecting the entire value of the input before each insert, but this results in the whole value being selected after each undo.
3. `document.execCommand` has issues in FireFox and can have inconsistent behavior across browsers.

For these reasons, the native undo/redo stack is currently unsupported in `vue-text-input`. However, I plan to implement a custom alternative input history solution in the future allowing undo/redo to still be possible everywhere except for in the native context menu.

## Author Information

Designed and implemented by Aaron Beaudoin  
Written while working as a student at Union College, NE
