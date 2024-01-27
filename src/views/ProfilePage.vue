<template>
  <div style="width: 100%" class="container">
    <AnimateTitle>Profile</AnimateTitle>
    <div class="card">
      <div class="card-header">
        <div class="col-12 my-4">
          <div
            class="text-center animate__animated animate__flipInX"
            style="overflow: hidden"
          >
            <img
              src="https://i.pinimg.com/236x/b0/3e/30/b03e30a36ea16afcb6fd230d0a966cbf.jpg"
              class="profileImg"
              title="Profile"
            />
          </div>
          <div class="text-center">
            <h1 class="mt-3 animate__animated animate__flipInX">
              Htet Aung Linn
            </h1>
            <h5 class="animate__animated animate__flipInX">Mandalay</h5>
            <p class="mb-0 animate__animated animate__flipInX">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <!-- 1 -->
          <div class="col-md-6 my-1 animate__animated animate__backInUp">
            <RouterLink
              :to="{ name: 'updateProfile' }"
              class="d-flex justify-content-between btn btn-outline-secondary py-3"
            >
              <span>Update Profile</span>
              <i class="fa-solid fa-chevron-right"></i>
            </RouterLink>
          </div>
          <!-- 2 -->
          <div class="col-md-6 my-1 animate__animated animate__backInUp">
            <RouterLink
              :to="{ name: 'connectAccount' }"
              class="d-flex justify-content-between btn btn-outline-secondary py-3"
            >
              <span>Connect Accounts</span>
              <i class="fa-solid fa-chevron-right"></i>
            </RouterLink>
          </div>
          <!-- 3 -->
          <div class="col-md-6 my-1 animate__animated animate__backInUp">
            <RouterLink
              to="/"
              class="d-flex justify-content-between btn btn-outline-secondary py-3"
            >
              <span>Change Password</span>
              <i class="fa-solid fa-chevron-right"></i>
            </RouterLink>
          </div>
          <!-- 4 -->
          <div class="col-md-6 my-1 animate__animated animate__backInUp">
            <RouterLink
              to="/"
              class="d-flex justify-content-between btn btn-outline-secondary py-3"
            >
              <span>What is New</span>
              <i class="fa-solid fa-chevron-right"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <BackBtn />
  </div>
</template>

<script>
import BackBtn from "@/components/BackBtn.vue";
import AnimateTitle from "@/components/AnimateTitle.vue";
export default {
  name: "profilePage",
  components: { BackBtn, AnimateTitle },
  created() {
    const token = localStorage.getItem("authToken");
    console.log(token);
  },
};
</script>

<style>
.profileImg {
  width: 200px;
  height: 200px;
  border: 3px dashed #3e4bff;
  border-radius: 50%;
  padding: 2px;
  background-size: cover;
  object-fit: cover;
}
@media (max-width: 768px) {
  .profileImg {
    width: 130px;
    height: 130px;
  }
}
</style>
