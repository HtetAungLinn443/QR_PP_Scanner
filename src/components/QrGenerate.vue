<template>
  <div class="justify-content-center">
    <div class="col-lg-4 offset-lg-4 col-md-8 offset-md-2">
      <div class="card shadow animate__animated animate__bounceIn">
        <RouterLink :to="{ name: 'profilePage' }">
          <div class="card-body d-flex flex-column align-items-center">
            <h1 class="fs-4 text-center text-dark">Htet Aung Linn</h1>
            <img
              src="https://i.pinimg.com/236x/b0/3e/30/b03e30a36ea16afcb6fd230d0a966cbf.jpg"
              alt="User"
              title="Htet Aung Linn"
              class="img-thumbnail rounded-circle profileImage"
            />
          </div>
        </RouterLink>
      </div>
      <div class="card my-3 shadow animate__animated animate__bounceIn">
        <h1 class="text-dark text-center m-0">Scan me</h1>
        <div class="card-body text-center">
          <QrcodeVue
            :value="value"
            :size="size"
            :background="background"
            :foreground="foreground"
          />
        </div>
      </div>

      <div class="card animate__animated animate__bounceIn">
        <div class="card-body icon-rounded d-flex justify-content-between">
          <a href="#" @click="toggleMenu" title="Facebook">
            <i class="fa-brands fa-facebook" style="color: blue"></i>
          </a>
          <a href="#" @click="toggleMenu" title="Instagram">
            <i class="fa-brands fa-instagram" style="color: red"></i>
          </a>

          <a href="#" @click="toggleMenu" title="Telegram">
            <i class="fa-brands fa-telegram" style="color: skyblue"></i>
          </a>
          <a href="#" @click="toggleMenu" title="Twitter">
            <i class="fa-brands fa-x-twitter" style="color: black"></i>
          </a>
          <a href="#" @click="toggleMenu" title="Phone Number">
            <i class="fa-solid fa-phone" style="color: green"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";

export default {
  data() {
    return {
      value: "https://www.youtube.com",
      size: 200,
      background: "#ffffff00",
      foreground: "#000",
      showLoading: false,
    };
  },
  components: {
    QrcodeVue,
  },

  methods: {},
};
</script>
<style scoped>
.icon-rounded a {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background-color: #ffffff;
  transition: 0.3s;
  box-shadow: 0px 0px 10px #373737;
}
.icon-rounded a:hover {
  transform: scale(1.15);
}
.animate__animated.animate__bounceIn {
  --animate-duration: 1.5s;
}
.loading {
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 10px;
  transform: translate(-50%, -50%);
}
.profileImage {
  width: 160px;
  height: 160px;
  border: 3px solid #004454;
  object-fit: cover;
}
@media (max-width: 345px) {
  canvas {
    width: 140px !important;
    height: 140px !important;
  }
  .icon-rounded a {
    height: 25px;
    width: 25px;
    font-size: 12px;
  }
}
</style>
