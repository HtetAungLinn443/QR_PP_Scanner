<template>
  <div class="">
    <div class="offset-1 col-10 pt-3">
      <AnimateTitle>{{ title }}</AnimateTitle>
      <div class="card col-md-6 offset-md-3">
        <div class="card-body">
          <p class="text-center">
            <i :class="iconClass" :style="iconStyle"></i>
          </p>
          <form @submit.prevent="submit()">
            <div class="mb-3">
              <label for="" class="form-label">{{ label }}</label>
              <input
                :type="inputType"
                class="form-control"
                :class="{
                  'is-invalid': error && inputData === '',
                  'is-valid': !error && inputData !== '',
                }"
                :placeholder="placeholder"
                v-model="inputData"
              />
              <small class="text-danger" v-if="error"> {{ error }}</small>
            </div>
            <button type="submit" class="btn btn-info btn-block">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <back-btn></back-btn>
  </div>
</template>

<script>
import AnimateTitle from "@/components/AnimateTitle.vue";
import BackBtn from "@/components/BackBtn.vue";
export default {
  name: "SocialAdd",
  components: { AnimateTitle, BackBtn },
  data() {
    return {
      title: "",
      label: "",
      routeName: undefined,
      inputData: "",
      placeholder: "",
      error: "",
      iconClass: undefined,
      iconStyle: undefined,
    };
  },
  mounted() {
    this.routeName = this.$route.name;
    switch (this.routeName) {
      case "connectPhone":
        this.label = "Phone Number";
        this.title = "Phone Connect";
        this.inputType = "text";
        this.placeholder = "Enter Your Phone Number";
        this.iconClass = "fa-solid fa-phone";
        this.iconStyle = { color: "#fff", background: "skyblue" };
        return;
      case "connectFacebook":
        this.label = "Username";
        this.title = "Facebook Connect";
        this.inputType = "text";
        this.placeholder = "Enter Your Facebook Username";
        this.iconClass = "fa-brands fa-facebook-f";
        this.iconStyle = { color: "#fff", background: "#3b5998" };
        return;
      case "connectMessenger":
        this.label = "Username";
        this.title = "Messenger Connect";
        this.inputType = "text";
        this.placeholder = "Enter Your Messenger Username";
        this.iconClass = "fa-brands fa-facebook-messenger";
        this.iconStyle = { color: "#fff", background: "#00B2FF" };
        return;
      case "connectInstagram":
        this.label = "Username";
        this.title = "Instagram Connect";
        this.inputType = "text";
        this.placeholder = "Enter Your Instagram Username";
        this.iconClass = "fa-brands fa-instagram";
        this.iconStyle = {
          background: `radial-gradient(circle at 30% 107%,#fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%)`,
        };
        return;
      case "connectWhatApp":
        this.label = "Phone Number";
        this.title = "WhatApp Connect";
        this.inputType = "text";
        this.placeholder = "Enter Your WhatApp Phone Number";
        this.iconClass = "fa-brands fa-whatsapp";
        this.iconStyle = { background: "#5ffc7b", color: "#fff" };
        return;
      case "connectTwitter":
        this.label = "Username";
        this.title = "X(Twitter) Connect";
        this.inputType = "text";
        this.placeholder = "Enter Your X(Twitter) Username";
        this.iconClass = "fa-brands fa-x-twitter";
        this.iconStyle = { background: "#000" };
        return;
      case "connectTiktok":
        this.label = "Username";
        this.title = "TikTok Connect";
        this.inputType = "text";
        this.placeholder = "Enter Your TikTok Username";
        this.iconClass = "fa-brands fa-tiktok text-light";
        this.iconStyle =
          "filter:drop-shadow(2px 0px 0px #fd3e3e) drop-shadow(-2px -2px 0px #4de8f4); color: #111111;";
        return;
      case "connectYouTube":
        this.label = "Username";
        this.title = "YouTube Connect";
        this.inputType = "text";
        this.placeholder = "Enter Your YouTube Username";
        this.iconClass = "fa-brands fa-youtube";
        this.iconStyle = { color: "#fff", background: "red" };
        return;
      case "connectViber":
        this.label = "Phone Number";
        this.title = "Viber Connect";
        this.inputType = "text";
        this.placeholder = "Enter Your Viber Phone Number";
        this.iconClass = "fa-brands fa-viber";
        this.iconStyle = { color: "#fff", background: "#7360f2" };
        return;
      case "connectTelegram":
        this.label = "Phone Number";
        this.title = "Telegram Connect";
        this.inputType = "text";
        this.placeholder = "Enter Your Telegram Phone Number";
        this.iconClass = "fa-brands fa-telegram";
        this.iconStyle = { color: "#0088cc", background: "#fff" };
        return;
      case "connectDiscord":
        this.label = "Username";
        this.title = "Discord Connect";
        this.inputType = "text";
        this.placeholder = "Enter Your Discord Username";
        this.iconClass = "fa-brands fa-discord";
        this.iconStyle = { color: "#fff", background: "#7289da" };
        return;
      case "connectWeChat":
        this.label = "Phone Number";
        this.title = "WeChat Connect";
        this.inputType = "text";
        this.placeholder = "Enter Your WeChat Phone Number";
        this.iconClass = "fa-brands fa-weixin";
        this.iconStyle = { color: "#fff", background: "#09b83e" };
        return;
      case "connectSpotify":
        this.label = "Username";
        this.title = "Spotify Connect";
        this.inputType = "text";
        this.placeholder = "Enter Your Spotify Username";
        this.iconClass = "fa-brands fa-spotify";
        this.iconStyle = { color: "#fff", background: "#09b83e" };
        return;
      case "connectLinkedIn":
        this.label = "Username";
        this.title = "LinkedIn Connect";
        this.inputType = "text";
        this.placeholder = "Enter Your LinkedIn Username";
        this.iconClass = "fa-brands fa-linkedin";
        this.iconStyle = { color: "#fff", background: "#0a66c2" };
        return;
      default:
    }
  },
  methods: {
    submit() {
      if (this.inputData === "") {
        this.error = `Please ${this.placeholder}.`;
      } else {
        this.error = "";
        this.$swal({
          title: "Do you want to save ?",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "Save",
        }).then((result) => {
          if (result.isConfirmed) {
            this.showSuccessToast();
            this.$router.push("/connect/account");
          }
        });
      }
    },
    showSuccessToast() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      Toast.fire({
        icon: "success",
        title: "Create Success",
      });
    },
  },
};
</script>
<style scoped>
.is-invalid {
  margin-bottom: 2px !important;
}
p i {
  color: #fff;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 28px;
  box-shadow: 0px 3px 5px #00000040;
  margin: 0 auto;
}
</style>
