const loadConfig = async () => {
  const GLOBAL = {
    baseURL: process.env.VUE_APP_PROJECT_API_baseURL,
  };
  const windowGlobal = window.$global || {};
  window.$global = {
    ...GLOBAL,
    ...windowGlobal,
  };
  import("./setup");
};
if (process.env.VUE_APP_PROJECT_ENV === "development") {
  // 调接口可以去掉
  import("../mock").then((res) => {
    loadConfig();
  });
} else {
  loadConfig();
}
