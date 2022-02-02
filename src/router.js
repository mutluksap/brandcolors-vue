import { createRouter, createWebHistory } from "vue-router";
import ColorDetail from "./components/ColorDetail";

const routes = [
  {
    path: "/asd",
    component: ColorDetail,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;
