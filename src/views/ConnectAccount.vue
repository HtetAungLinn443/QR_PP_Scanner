<template>
  <div class="" style="min-height: 90vh">
    <div class="offset-1 col-10">
      <AnimateTitle>Media Connect Page</AnimateTitle>
      <div class="card mb-5">
        <div class="card-body">
          <div class="row">
            <div
              v-for="(socialMedia, index) in socialMediaList"
              :key="index"
              class="col-lg-4 col-md-6 my-2"
            >
              <RouterLink
                :to="'/connect/' + socialMedia.route"
                class="d-flex justify-content-between align-items-center btn btn-outline-dark py-3"
              >
                <span style="font-weight: 900; text-transform: capitalize">{{
                  socialMedia.name
                }}</span>
                <i
                  :class="socialMedia.iconClass"
                  :style="socialMedia.iconStyle"
                ></i>
              </RouterLink>
            </div>
          </div>
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
  components: { AnimateTitle, BackBtn },
  data() {
    return {
      socialMediaList: [
        {
          name: "Facebook",
          color: "",
          iconClass: "fa-brands fa-facebook-f",
          iconStyle: { color: "#fff", background: "#3b5998" },
          route: "facebook",
        },
        {
          name: "Messenger",
          color: "#00B2FF",
          iconClass: "fa-brands fa-facebook-messenger",
          iconStyle: { color: "#fff", background: "#00B2FF" },
        },
        {
          name: "Instagram",
          color: "",
          iconClass: "fa-brands fa-instagram",
          iconStyle: {
            background: `radial-gradient(circle at 30% 107%,#fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%)`,
          },
          route: "instagram",
        },
        {
          name: "What App",
          color: "",
          iconClass: "fa-brands fa-whatsapp",
          iconStyle: { background: "#5ffc7b", color: "#fff" },
          route: "whatsapp",
        },
        {
          name: "X (Twitter)",
          color: "",
          iconClass: "fa-brands fa-x-twitter",
          iconStyle: { background: "#000" },
          route: "twitter",
        },
        {
          name: "TikTok",
          color: "",
          iconClass: "fa-brands fa-tiktok text-light",
          iconStyle:
            "filter:drop-shadow(2px 0px 0px #fd3e3e) drop-shadow(-2px -2px 0px #4de8f4); color: #111111;",
          route: "tiktok",
        },
        {
          name: "You Tube",
          color: "",
          iconClass: "fa-brands fa-youtube ",
          iconStyle: { color: "#fff", background: "red" },
          route: "youtube",
        },
        {
          name: "Viber",
          color: "",
          iconClass: "fa-brands fa-viber",
          iconStyle: { color: "#fff", background: "#7360f2" },
          route: "viber",
        },
        {
          name: "Telegram",
          color: "",
          iconClass: "fa-brands fa-telegram",
          iconStyle: { color: "#0088cc", background: "#fff" },
          route: "telegram",
        },
        {
          name: "Discord",
          color: "",
          iconClass: "fa-brands fa-discord",
          iconStyle: { color: "#fff", background: "#7289da" },
          route: "discord",
        },
        {
          name: "We Chat",
          color: "",
          iconClass: "fa-brands fa-weixin",
          iconStyle: { color: "#fff", background: "#09b83e" },
          route: "linkin",
        },
        {
          name: "Spotify",
          color: "",
          iconClass: "fa-brands fa-spotify",
          iconStyle: { color: "#fff", background: "#09b83e" },
          route: "spotify",
        },
        {
          name: "LinkedIn",
          color: "",
          iconClass: "fa-brands fa-linkedin",
          iconStyle: { color: "#fff", background: "#0a66c2" },
          route: "linkedin",
        },
      ],
    };
  },
};
</script>

<style scoped>
.btn i {
  color: #fff;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 20px;
  box-shadow: 0px 3px 5px #00000040;
}
.btn span {
  font-size: 16px;
}
</style>
