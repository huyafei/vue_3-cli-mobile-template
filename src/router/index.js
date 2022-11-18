import { createRouter, createWebHashHistory } from "vue-router";
import store from "@/store";
import cookies from "@plugins/modules/cookies";

import constantRoutes from "./modules/constantRoutes";
import asyncRoutes from "./modules/asyncRoutes";

const routes = [...constantRoutes, ...asyncRoutes];

const router = createRouter({
  history: createWebHashHistory(process.env.VUE_APP_PROJECT_BASE), // 或者 createWebHistory(process.env.VUE_APP_PROJECT_BASE)
  routes,
});
const whiteList = ["Login", "Page404", "Page401"];

router.beforeEach(async (to, from, next) => {
  if (whiteList.includes(to.name)) {
    next();
  } else {
    // 刷新页面重新登陆，更新权限
    // if (!from.name && to.name !== "Login") {
    //   next({
    //     name: "Login",
    //     query: {
    //       redirect: to.fullPath
    //     }
    //   });
    // } else {
    const token = cookies.get("token");
    if (token) {
      if (!store.state.user.userInfo) {
        await store.dispatch("user/_getUserInfo");
      }
      next();
    } else {
      next({
        name: "Login",
        query: {
          redirect: to.fullPath,
        },
      });
    }
    // }
  }
});

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  window.scrollTo(0, 0);
});

export default router;
