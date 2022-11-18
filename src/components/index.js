/**
 * @name: index
 * @description: index.js
 * @date: 2022/10/20 9:53
 * @author: yf_hu
 */
const modules = require.context("@/components", true, /\.vue$/);
const prefix = "Ven";

export default function (app) {
  modules.keys().forEach((modulesKey) => {
    const component = modules(modulesKey).default;
    const componentName = `${prefix}${component.name}`;
    app.component(componentName, component);
  });
}
