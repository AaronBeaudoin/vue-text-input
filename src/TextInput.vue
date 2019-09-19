<template>
  <input v-bind="$attrs" v-on="listeners"
  @input="handleInput" @focus="handleFocus" @blur="handleBlur">
</template>

<script>
import * as inputConfig from "./inputConfig";
import * as inputListeners from "./inputListeners";
import * as inputMethods from "./inputMethods";

export default {
  name: "text-input",
  mixins: [
    { computed: inputConfig },
    { methods: inputListeners },
    { methods: inputMethods }
  ],
  props: {
    type: { type: String, default: "text" },
    restrict: { type: [Function, Array], default: null },
    validate: { type: [Function, Array], default: null },
    invalidate: { type: [Function, Array], default: null },
    format: { type: Function, default: null },
    parse: { type: Function, default: null },
    stringify: { type: Function, default: null },
    value: { default: null },
    restore: { type: Boolean, default: false },
    live: { type: Boolean, default: true },
    select: { type: Boolean, default: false },
    clear: { type: Boolean, default: false }
  },
  data() {
    return {
      inputValue: null,
      dataValue: null,
      restoreValue: null,
      canRestore: true
    };
  },
  computed: {
    listeners() {
      let { input, focus, blur, ...listeners } = this.$listeners;
      return listeners;
    },
    isActive() {
      return this.$options.pluginData.instance === this;
    },
    typeConfig() {
      let types = this.$options.pluginData.types;
      return this.type in types ? types[this.type] : types["text"];
    },
    validity() {
      if (this.inputValue === null) return null;
      
      let isValid = this.inputValidate(this.inputValue);
      let isInvalid = this.inputInvalidate(this.inputValue);
      return isInvalid ? false : isValid ? true : null;
    }
  },
  mounted() {
    this.dataValue = this.value;
    this.updateValue(this.dataValue);

    this.$el.addEventListener("keydown", this.keydownListener);
    this.$el.addEventListener("paste", this.pasteListener);
    if (this.select) this.$el.addEventListener("focus", this.selectListener);
    if (this.clear) this.$el.addEventListener("focus", this.clearListener);
  },
  methods: {
    updateValue(value) {
      this.inputValue = this.inputFormat(this.inputStringify(value))[0];
      this.$el.value = this.inputValue;
    },
    handleInput() {
      this.inputValue = this.$el.value;
      if (this.live) {
        this.dataValue = this.inputParse(this.$el.value);
        this.$emit("input", this.dataValue);
      }
    },
    handleFocus() {
      if (this.restore) this.restoreValue = this.dataValue;
      
      this.$options.pluginData.instance = this;
      this.$emit("focus", this);
    },
    handleBlur() {
      if (this.restore && this.canRestore) {
        this.dataValue = this.restoreValue;
        this.$emit("input", this.dataValue);
      } else if (!this.live) {
        this.dataValue = this.inputParse(this.inputValue);
        this.$emit("input", this.dataValue);
      }

      this.updateValue(this.dataValue);
      if (this.restore && !this.canRestore) this.canRestore = true;

      this.$options.pluginData.instance = null;
      this.$emit("blur", this);
    }
  },
  watch: {
    value(value) {
      this.dataValue = value;
      if (!this.isActive) this.updateValue(this.dataValue);
    },
    validity(value) {
      this.$emit("validity", value);
    }
  }
};
</script>
