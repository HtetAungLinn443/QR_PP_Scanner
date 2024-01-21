<template>
  <div class="row">
    <div class="offset-1 col-10">
      <AnimateTitle>{{ title }}</AnimateTitle>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialAdd",
  props: {
    title: {
      type: String,
      default: "",
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>