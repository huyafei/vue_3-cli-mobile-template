/**
 * @name: index
 * @description：index.js
 * @date: 2022/10/20 9:54
 * @author: yf_hu
 */
const modules = require.context("@/plugins/modules/", true, /\.js$/);

export default function (app) {
  modules.keys().forEach((key) => {
    modules(key);
    const VUE_PLUGIN_NAME =  modules(key).default?.VUE_PLUGIN_NAME
    if(VUE_PLUGIN_NAME){
      app.config.globalProperties[VUE_PLUGIN_NAME] = modules(key).default
    }
    if(modules(key).default?.name === '__WEBPACK_DEFAULT_EXPORT__'){
      modules(key).default(app)
    }
  });
}

