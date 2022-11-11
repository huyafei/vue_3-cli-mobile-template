/**
 * @name: router
 * @description：router.js
 * @date: 2022/11/4 13:41
 * @author: yf_hu
 */
const router = {
  namespaced: true,
  state: {
    cachedViews: [],
  },
  getters: {},
  mutations: {
    SET_CACHED_VIEWS: (state, name) => {
      state.cachedViews.push(name);
    },
  },
  actions: {
    addCachedViews: function ({ state, commit }, view) {
      if (state.cachedViews.includes(view.name)) return;
      if (view.meta.isCache) {
        commit("SET_CACHED_VIEWS", view.name);
      }
    },
  },
};

export default router;
