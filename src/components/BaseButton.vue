<template>
  <div>
    <button class="btn" :class="className" :id="id" :type="type">
      {{ buttonName }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    buttonName: {
      type: String,
      default: "Submit",
    },
    className: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "button",
    },
  },
  name: "baseButton",
};
</script>

<style lang="scss" scoped></style>
