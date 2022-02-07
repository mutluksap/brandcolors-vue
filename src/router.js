import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/c/:color",
    component: Home,
  },
  {
    path: "/c/:pathMatch(.*)*",
    redirect: "/",
  },
  {
    path: "/b/:colors",
    component: Home,
  },
  {
    path: "/b",
    redirect: "/",
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;
