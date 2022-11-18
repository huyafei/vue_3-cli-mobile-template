/**
 * @name: vconsole
 * @description: vconsole.js
 * @date: 2022/10/21 15:33
 * @author: yf_hu
 */
import vConsole from "vconsole";

export default function (app) {
  if (["uat"].includes(process.env.VUE_APP_PROJECT_ENV)) {
    app.config.globalProperties.$vConsole = new vConsole();
  }
}
