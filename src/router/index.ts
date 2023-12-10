import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/account",
    name: "accountPage",
    component: () => import("@/views/AccountPage.vue"),
  },
  {
    path: "/profile",
    name: "profilePage",
    component: () => import("@/views/ProfilePage.vue"),
  },
  {
    path: "/profile/update",
    name: "UpdateProfile",
    component: () => import("@/views/UpdateProfile.vue"),
  },
  {
    path: "/contact",
    name: "contactPage",
    component: () => import("@/views/ContactPage.vue"),
  },
  {
    path: "/about",
    name: "aboutPage",
    component: () => import("@/views/AboutPage.vue"),
  },
  {
    path: "/login",
    name: "loginPage",
    component: () => import("@/views/LoginPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
