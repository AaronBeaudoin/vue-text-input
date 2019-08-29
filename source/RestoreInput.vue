<template>
<smart-input data-restore="true" v-bind="$attrs" v-on="$listeners"
@focus="handleFocus" @blur="handleBlur"/>
</template>

<script>
// Written by Aaron Beaudoin at Union College

export default {
  name: "restore-input",
  inheritAttrs: false,
  data: _ => ({
    restoreValue: null
  }),
  methods: {
    handleFocus(event) {
      this.restoreValue = this.$attrs.value;
    },
    handleBlur(event) {
      let canRestore = this.$el.dataset.restore === "true";
      if (canRestore) this.$emit("input", this.restoreValue);
      this.$el.dataset.restore = "true";
    }
  }
};
</script>
