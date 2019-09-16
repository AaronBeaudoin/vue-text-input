<!-- Written by Aaron Beaudoin at Union College -->

<template>
<input :data-smart="type" :placeholder="placeholder" v-on="listeners" @input="handleInput" @focus="handleFocus" @blur="handleBlur"/>
</template>

<script>
// Needed for handling of paste events
import { insertValue } from "./helpers";

export default {
  name: "smart-input",
  props: {
    type: { type: String, default: "text" },
    value: { default: null },
    placeholder: { type: String }
  },
  // The component must track whether its element is focused so it
  // knows whether to update `$input.type` and `$input.value`
  data: _ => ({
    isFocused: false,
    ignoreValue: false
  }),
  // Ensure the input value is set to `this.value`
  // when the input element is initially created
  mounted() {
    let value = this.stringify(this.value);
    [value] = this.format(value, value.length);
    
    // The element's value can simply be set directly because no
    // `input` event needs to be emitted; An `input` value occurs
    // only when a change originates in the input element
    this.$el.value = value;

    // Ensures paste events are restricted and formatted properly
    this.$el.addEventListener("paste", event => {
      event.preventDefault();
      let value = event.clipboardData.getData("text");
      insertValue(this.$el, this.types, value);
    });
  },
  computed: {
    valid() {
      return this.types[this.type].valid;
    },
    invalid() {
      return this.types[this.type].invalid;
    },
    format() {
      return this.types[this.type].format;
    },
    parse() {
      return this.types[this.type].parse;
    },
    stringify() {
      return this.types[this.type].stringify;
    },
    // Combined with the `v-on` directive in the template, this forwards
    // all events on the input element up to the parent component EXCEPT
    // the `input` event which is handled specially to allow `v-model`
    listeners() {
      let { input, ...listeners } = this.$listeners;
      return listeners;
    }
  },
  methods: {
    validity(value) {
      let isValid = this.valid.bind(this)(value);
      let isInvalid = this.invalid.bind(this)(value);
      return isInvalid ? false : isValid ? true : null;
    },
    handleInput(event) {
      // The purpose of `this.ignoreValue` is to ensure that the parsed
      // value does not overwrite the input when `watch.value` is called
      let parsedValue = this.parse(this.$el.value);
      if (parsedValue !== this.value) this.ignoreValue = true;
      this.$emit("input", parsedValue);

      if (this.isFocused) {
        this.tracking.value = this.$el.value;
        this.tracking.validity = this.validity(this.$el.value);
        this.tracking.parsed = parsedValue;
      }
    },
    handleFocus(event) {
      this.isFocused = true;

      this.tracking.active = true;
      this.tracking.type = this.type;
      this.tracking.value = this.$el.value;
      this.tracking.validity = this.validity(this.$el.value);
      this.tracking.parsed = this.parse(this.$el.value);
    },
    handleBlur(event) {
      this.isFocused = false;
      this.tracking.active = false;
      this.$el.value = this.stringify(this.value);
    }
  },
  watch: {
    // Update `$input.type` if `this.type` changes
    // while the input element is focused
    type(value) {
      if (this.isFocused) this.tracking.type = value;
    },
    // Update the input value if `this.value` changes, unless the change
    // was caused by an `input` event emitted by this component
    // (Note that no `input` event is dispatched to prevent
    // a loop where the `input` event emitted to the parent
    // component causes this function to be called again)
    value(value) {
      if (this.ignoreValue) this.ignoreValue = false;
      else {
        value = this.stringify(value);
        [value] = this.format(value, value.length);

        // The element's value can simply be set directly because no
        // `input` event needs to be emitted; An `input` value occurs
        // only when a change originates in the input element
        this.$el.value = value;
      }
    }
  }
};
</script>
