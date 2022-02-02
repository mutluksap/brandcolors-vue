import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Detail from "./views/Detail.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/c/:color",
    component: Detail,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;
