<template>
  <div class="">
    <NavHeader></NavHeader>
    <router-view v-if="!showLoading" />
    <div class="loading" v-else>
      <l-cardio size="50" stroke="4" speed="1.5" color="#000"></l-cardio>
    </div>
  </div>
</template>
<script>
import NavHeader from "@/components/NavHeader.vue";
export default {
  name: "App",
  components: { NavHeader },
  data() {
    return {
      showLoading: true,
    };
  },
  created() {
    setTimeout(() => {
      this.showLoading = false;
    }, 2000);
  },
  watch: {
    $route(to, from) {
      this.showLoading = true;
      setTimeout(() => {
        this.showLoading = false;
      }, 2000);
    },
  },
};
</script>
<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
body {
  background-color: #fafafa;
  user-select: none !important;
}
.card {
  backdrop-filter: blur(10px) !important;
}
.loading {
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 10px;
  transform: translate(-50%, -50%);
}
</style>
