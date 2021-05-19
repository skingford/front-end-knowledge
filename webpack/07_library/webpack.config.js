/*
 * @Author: kingford
 * @Date: 2021-05-18 17:41:42
 * @LastEditTime: 2021-05-18 17:47:47
 */
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack-numbers.js",
    library: {
      name: "webpackNumbers",
      type: "umd",
    },
  },
  externals: {
    lodash: {
      commonjs: "lodash",
      commonjs2: "lodash",
      amd: "lodash",
      root: "_",
    },
  },
};
