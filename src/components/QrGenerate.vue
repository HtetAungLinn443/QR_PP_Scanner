<template>
  <div class="d-flex justify-content-center align-items-center">
    <div>
      <div class="card shadow animate__animated animate__bounceIn">
        <div class="card-body d-flex flex-column align-items-center">
          <h1 class="fs-4 text-center">Htet Aung Linn</h1>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcoK-dlbjL7C1eAPifV1gUs2n6ukUugyM-J5wFbSEptPEn7GCoJXnFXMDlp9SdP-JcIQ&usqp=CAU"
            alt="User"
            title="Htet Aung Linn"
            class="img-thumbnail rounded-circle"
            style="width: 40%; border: 3px solid #004454"
          />
        </div>
      </div>
      <div class="card my-3 shadow animate__animated animate__bounceIn">
        <h1 class="text-dark text-center m-0">Scan me</h1>
        <div class="card-body text-center">
          <qrcode-vue
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
            <i class="fa-solid fa-x" style="color: black"></i>
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
      value: "https://www.facebook.com/HtetAungLinn443/",
      size: 200,
      background: "#fff",
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
</style>
