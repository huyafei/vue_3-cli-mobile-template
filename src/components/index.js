/**
 * @name: index
 * @description：index.js
 * @date: 2022/10/20 9:53
 * @author: yf_hu
 */
const modules = require.context("@/components", true, /\.vue$/);
const prefix = "Ven";

export default function (app) {
  modules.keys().forEach((key) => {
    const component = modules(key).default;
    const componentName = component.name?.toString?.()?.startsWith?.(prefix)
      ? `${component.name}`
      : `${prefix}${component.name}`;
    app.component(`${componentName}`, component);
  });
}
