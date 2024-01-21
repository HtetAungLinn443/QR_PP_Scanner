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
    }, 1000);
  },
  watch: {
    $route() {
      this.showLoading = true;
      setTimeout(() => {
        this.showLoading = false;
      }, 1000);
    },
  },
};
</script>
<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
body {
  user-select: none !important;
  min-height: 100vh;
  background: linear-gradient(to bottom, #e4e4e4, #6e77ee);
}
.card {
  background: rgba(255, 255, 255, 0.282) !important;
}
.loading {
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 10px;
  transform: translate(-50%, -50%);
}
.form-control {
  background: rgba(255, 255, 255, 0.282) !important;
  color: #000;
}
.form-control:focus {
  border-color: rgb(2, 204, 255);
}
</style>
