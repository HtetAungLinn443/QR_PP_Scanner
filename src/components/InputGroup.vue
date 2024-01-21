<template>
  <input
    :type="type"
    :id="id"
    class="form-control mb-0"
    :class="className"
    :placeholder="placeholder"
    v-model="inputValue"
    @input="emitInput"
  />
</template>

<script>
export default {
  name: "inputGroup",
  props: {
    id: {
      type: String,
      default: "",
      require: true,
    },
    type: {
      type: String,
      default: "text",
      require: false,
    },
    placeholder: {
      type: String,
      default: "Please Write Here",
      require: false,
    },
    className: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    emitInput() {
      this.$emit("input", this.inputValue);
    },
  },
};
</script>
