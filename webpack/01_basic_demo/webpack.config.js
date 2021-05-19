/*
 * @Author: kingford
 * @Date: 2021-05-18 14:08:05
 * @LastEditTime: 2021-05-18 14:11:50
 */
const path = require("path");

module.exports = {
  mode: "development", //development、production
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
