/**
 * @name: postcss.config
 * @description：postcss.config.js
 * @date: 2022/6/27 10:19
 * @author: yf_hu
 */
module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 37.5,
      propList: ["*"],
    },
  },
};
