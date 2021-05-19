/*
 * @Author: kingford
 * @Date: 2021-05-18 17:41:42
 * @LastEditTime: 2021-05-19 13:53:28
 */
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-bundle.js",
    library: {
      name: "library",
      type: "umd",
    },
    clean: true,
  },
  externals: ["lodash"],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
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
