<template>
  <div style="width: 100%" class="container">
    <div class="text-container" style="height: 10vh">Profile</div>
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
            <router-link
              to="/profile/update"
              class="d-flex justify-content-between btn btn-outline-secondary py-3"
            >
              <span>Update Profile</span>
              <i class="fa-solid fa-chevron-right"></i>
            </router-link>
          </div>
          <!-- 2 -->
          <div class="col-md-6 my-1 animate__animated animate__backInUp">
            <router-link
              to="/"
              class="d-flex justify-content-between btn btn-outline-secondary py-3"
            >
              <span>Connect Accounts</span>
              <i class="fa-solid fa-chevron-right"></i>
            </router-link>
          </div>
          <!-- 3 -->
          <div class="col-md-6 my-1 animate__animated animate__backInUp">
            <router-link
              to="/"
              class="d-flex justify-content-between btn btn-outline-secondary py-3"
            >
              <span>Change Password</span>
              <i class="fa-solid fa-chevron-right"></i>
            </router-link>
          </div>
          <!-- 4 -->
          <div class="col-md-6 my-1 animate__animated animate__backInUp">
            <router-link
              to="/"
              class="d-flex justify-content-between btn btn-outline-secondary py-3"
            >
              <span>What is New</span>
              <i class="fa-solid fa-chevron-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <BackBtn />
  </div>
</template>

<script>
import BackBtn from "@/components/BackBtn.vue";
export default {
  name: "profilePage",
  components: { BackBtn },
};
</script>

<style>
.text-container {
  position: relative;
  font-size: 50px;
  text-align: center;
  font-weight: 900;
  background-image: url("../../public/img/bg.webp");
  background-clip: text;
  background-repeat: repeat;
  color: transparent;
  width: 100%;
  animation: moveBackground 10s linear infinite;
}
@keyframes moveBackground {
  0% {
    background-position: 0;
  }
  100% {
    background-position: 100%;
  }
}
.profileImg {
  width: 200px;
  height: 200px;
  border: 3px dashed #3e4bff;
  border-radius: 50%;
  padding: 2px;
  background-size: cover;
}
@media (max-width: 768px) {
  .profileImg {
    width: 130px;
    height: 130px;
  }
  .text-container {
    animation: moveBackground 3s linear infinite !important;
  }
}
</style>
