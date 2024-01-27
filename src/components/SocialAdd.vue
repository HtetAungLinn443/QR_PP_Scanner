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
  mounted() {
    // Access the current URL using window.location.href
    const currentUrl = window.location.href;
    console.log("Current URL:", currentUrl);

    // If you are using Vue Router, you can access the route information
    // const currentRoute = this.$route;
    // console.log("Current Route:", currentRoute);
  },
};
</script>

<style lang="scss" scoped>
</style>