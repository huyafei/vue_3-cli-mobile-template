import { createStore } from "vuex";

const modulesFile = require.context("./modules", true, /\.js$/);
const modules = {};
modulesFile.keys().forEach((key) => {
  const name = key.match(/\.\/(.*)\.js/)[1];
  modules[name] = modulesFile(key).default;
});

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules,
});
