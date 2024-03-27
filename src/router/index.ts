import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: () => {
      const authToken = localStorage.getItem("authToken");
      return authToken ? "/home" : "/login";
    },
  },
  {
    path: "/login",
    name: "loginPage",
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    path: "/home",
    name: "homePage",
    component: HomePage,
    meta: { requiresAuth: true },
  },
  {
    path: "/account",
    name: "accountPage",
    component: () => import("@/views/AccountPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/profile",
    name: "profilePage",
    component: () => import("@/views/ProfilePage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/profile/update",
    name: "updateProfile",
    component: () => import("@/views/UpdateProfile.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/connect/account",
    name: "connectAccount",
    component: () => import("@/views/ConnectAccount.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/connect/phone",
    name: "connectPhone",
    component: () => import("@/views/SocialAdd.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/connect/facebook",
    name: "connectFacebook",
    component: () => import("@/views/SocialAdd.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/connect/messenger",
    name: "connectMessenger",
    component: () => import("@/views/SocialAdd.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/connect/instagram",
    name: "connectInstagram",
    component: () => import("@/views/SocialAdd.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/connect/whatapp",
    name: "connectWhatApp",
    component: () => import("@/views/SocialAdd.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/connect/twitter",
    name: "connectTwitter",
    component: () => import("@/views/SocialAdd.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/connect/tiktok",
    name: "connectTiktok",
    component: () => import("@/views/SocialAdd.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/connect/youtube",
    name: "connectYouTube",
    component: () => import("@/views/SocialAdd.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/connect/viber",
    name: "connectViber",
    component: () => import("@/views/SocialAdd.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/connect/telegram",
    name: "connectTelegram",
    component: () => import("@/views/SocialAdd.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/connect/discord",
    name: "connectDiscord",
    component: () => import("@/views/SocialAdd.vue"),
    meta: { requiresAuth: true },
  },

  {
    path: "/connect/wechat",
    name: "connectWeChat",
    component: () => import("@/views/SocialAdd.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/connect/spotify",
    name: "connectSpotify",
    component: () => import("@/views/SocialAdd.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/connect/linkedin",
    name: "connectLinkedIn",
    component: () => import("@/views/SocialAdd.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/contact",
    name: "contactPage",
    component: () => import("@/views/ContactPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/about",
    name: "aboutPage",
    component: () => import("@/views/AboutPage.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/logout",
    redirect: "/login",
    meta: { requiresAuth: true },
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("@/views/ErrorPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = checkAuthentication();

  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

function checkAuthentication() {
  const token = localStorage.getItem("authToken");
  return !!token;
}

export default router;
