import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TaskView from "../views/TaskView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "task",
    component: TaskView,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
