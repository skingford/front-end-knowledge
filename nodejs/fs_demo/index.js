/*
 * @Author: kingford
 * @Date: 2021-05-12 11:04:58
 * @LastEditTime: 2021-05-12 11:11:00
 */
var fs = require("fs");

fs.readFile("./input.text", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("异步读取：", data.toString());
});

var data = fs.readFileSync("./input.text");
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");
