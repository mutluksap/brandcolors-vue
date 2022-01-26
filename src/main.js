import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import VueClipboard from "vue3-clipboard";

const app = createApp(App);

app.use(store);
app.use(VueClipboard);
app.mount("#app");
