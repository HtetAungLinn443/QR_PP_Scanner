import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";
import "./registerServiceWorker";
import "animate.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "@/plugins/axios";

createApp(App).use(store).use(router).use(VueSweetalert2).mount("#app");
