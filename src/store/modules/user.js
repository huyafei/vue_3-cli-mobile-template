import { getUserInfo, userLogin } from "@/api";
import cookies from "@/plugins/modules/cookies";
import router from "@router";

const user = {
  namespaced: true,
  state: {
    userInfo: "",
  },
  getters: {
    name: (state) => state.userInfo.name,
  },
  mutations: {
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo;
    },
  },
  actions: {
    async _userLogin(data) {
      const res = await userLogin(data);
      if (res?.result?.token) {
        let millisecond = new Date().getTime();
        let expires = new Date(millisecond + 7200 * 1000); // 2小时
        cookies.set("token", res.result.token, { expires });
        return {
          code: 200,
        };
      }
    },
    /**
     * 获取用户信息
     */
    async _getUserInfo({ commit }) {
      const res = await getUserInfo();
      if (res?.result) {
        commit("SET_USERINFO", res.result);
        return {
          code: 200,
        };
      }
    },
    /**
     * 退出登录
     */
    _userLogOut() {
      cookies.remove("token");
      this.userInfo = "";
      router.push({ name: "Login" });
      return {
        code: 200,
      };
    },
  },
};

export default user;
