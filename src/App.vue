<template>
  <div>
    <div v-if="shouldShowContent">
      <NavHeader v-if="shouldShowNavHeader" />
      <router-view v-if="!showLoading" class="pt-5" />
      <div class="loading" v-else>
        <l-cardio size="50" stroke="4" speed="1.5" color="#000"></l-cardio>
      </div>
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
      isAuthenticated: false,
    };
  },
  computed: {
    shouldShowNavHeader() {
      return !this.showLoading && this.$route.name !== "loginPage";
    },
    shouldShowContent() {
      return (
        !this.showLoading &&
        (this.isAuthenticated || this.$route.name === "loginPage")
      );
    },
  },
  mounted() {
    this.checkAuthentication();
  },
  created() {
    setTimeout(() => {
      this.showLoading = false;
    }, 1000);
  },
  methods: {
    checkAuthentication() {
      const token = localStorage.getItem("authToken");
      this.isAuthenticated = !!token;
    },
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
  background: #ffffff48 !important;
}
.loading {
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 10px;
  transform: translate(-50%, -50%);
}
.form-control {
  background: #ffffff48 !important;
  color: #000;
}
.form-control:focus {
  border-color: #6e77ee;
}
</style>
