<template>
  <div>
    <div>
      <NavHeader v-if="shouldShowNavHeader" />
      <div class="">
        <router-view class="pt-5" />
        <div class="loading" v-if="isLoading">
          <l-cardio size="50" stroke="4" speed="1.5" color="#000"></l-cardio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavHeader from "@/components/NavHeader.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: { NavHeader },
  data() {
    return {
      isAuthenticated: false,
    };
  },
  computed: {
    ...mapGetters(["isLoading"]),
    shouldShowNavHeader() {
      return !this.isLoading && this.$route.name !== "loginPage";
    },
    shouldShowContent() {
      return this.isAuthenticated || this.$route.name === "loginPage";
    },
  },
  mounted() {
    this.checkAuthentication();
  },

  methods: {
    checkAuthentication() {
      const token = localStorage.getItem("authToken");
      this.isAuthenticated = !!token;
    },
  },
  watch: {
    // $route() {
    //   this.isLoading = true;
    //   setTimeout(() => {
    //     this.isLoading = false;
    //   }, 1000);
    // },
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
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  background: #6e77ee;
}
.form-control {
  background: #ffffff48 !important;
  color: #000;
}
.form-control:focus {
  border-color: #6e77ee;
}
</style>
