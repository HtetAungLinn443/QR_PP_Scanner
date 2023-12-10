<template>
  <div class="">
    <NavHeader></NavHeader>
    <router-view />
  </div>
</template>
<script>
import NavHeader from "@/components/NavHeader.vue";
export default {
  name: "App",
  components: { NavHeader },
  data() {
    return {};
  },
};
</script>
<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
body {
  background-color: #ffffff;
  user-select: none !important;
}
.card {
  backdrop-filter: blur(10px) !important;
}
</style>
