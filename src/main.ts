import "@/assets/tailwind.css";
import "@/assets/main.css";

import { createApp } from "vue";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";

console.log(import.meta.env.MODE); // Example usage of process
console.log(import.meta.env.VITE_API_URL); // Example usage of process
const app = createApp(App);
app.use(PrimeVue, {
  theme: "none",
});
app.use(ToastService);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use(pinia);
app.mount("#app");
