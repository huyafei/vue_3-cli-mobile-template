/**
 * @name: setup
 * @description: setup.js
 * @date: 2022/11/3 14:09
 * @author: yf_hu
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { i18n } from "./lang";
import "lib-flexible";

import "./assets/styles/css/main.css";
import "./assets/styles/less/index.less";
// 引入组件
import("./components").then((e) => e.default(app));
// 加载插件
import("./plugins").then((e) => e.default(app));

const app = createApp(App);

app.use(store).use(router).use(i18n).mount("#app");
